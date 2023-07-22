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
              profilePicture: profile.image as string,
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
            image: createUser.profilePicture as string,
            wishlist: createUser.wishlist,
            categoryPilihan: createUser.categoryPilihan
          };
        }

        return {
          id: user.id,
          email: user.email,
          name: user.fullName,
          image: user.profilePicture as string,
          wishlist: user.wishlist,
          categoryPilihan: user.categoryPilihan
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
          image: user.profilePicture as string,
          wishlist: user.wishlist,
          categoryPilihan: user.categoryPilihan
        };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      // Fetch the user data from the database based on the user ID in the token
      if (token && token.id) {
        const user = await prisma.user.findUnique({
          where: {
            id: token.id as string,
          },
        });

        // If the user is found, add the 'id' and 'wishlist' fields to the session user
        if (user) {
          const updatedSession = {
            ...session,
            user: {
              ...session.user,
              id: user.id,
              wishlist: user.wishlist,
              categoryPilihan: user.categoryPilihan
            },
          };

          return updatedSession;
        }
      }

      return session;
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