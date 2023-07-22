import { prisma } from "./prisma";
import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      async profile(profile) {
        const user = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        });

        if(!user) {
          const createUser = await prisma.user.create({
            data: {
              email: profile.email as string,
              fullName: profile.name as string,
              password: "google",
              phoneNumber: '',
              country: '',
              region: '',
            },
          });

          return {
            id: createUser.id,
            email: createUser.email,
            name: createUser.fullName,
            image: profile.picture as string,
          };
        }

        return {
          id: user.id,
          email: user.email,
          name: user.fullName,
          image: profile.picture as string,
        };
    }
    }),
    CredentialsProvider({
      type:"credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email and password are required");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !(await compare(credentials.password, user.password))) {
          throw new Error("Password or email is incorrect");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.fullName,
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
        };
      }
      return token;
    },
  },
};