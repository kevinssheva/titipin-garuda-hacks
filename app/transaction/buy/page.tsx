import TransactionPage from "../components/TransactionPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";
import { Session } from "next-auth";

const Page = async () => {
  const session = await getServerSession(authOptions) as Session;

  const transactions = await prisma.transaction.findMany({
    where: {
      buyerId: session.user.id,
    },
    include: {
      post: {
        select: {
          title: true,
          price: true,
          imageURLs: true,
          author: {
            select: {
              fullName: true,
              profilePicture: true,
            }
          }
        }
      },
      buyer: {
        select: {
          fullName: true,
          profilePicture: true,
        }
      }
    },
  });


  return (
    <div className="my-20 container w-full max-w-[60rem] mx-auto h-screen px-5">
      <TransactionPage transaction={transactions} />
    </div>
  );
};

export default Page;
