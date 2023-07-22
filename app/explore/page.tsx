import Navbar from "../components/Navbar/Navbar";
import Explore from "./component/Explore";
import { prisma } from "@/app/lib/prisma";


export default async function Explorepage({ searchParams }: { searchParams: { category: string, subCategory: string, sort: string } }) {
    const { category, subCategory, sort } = searchParams;

    const posts = await prisma.post.findMany({
        where: {
            category: category ?? undefined,
            subCategory: subCategory ?? undefined,
        },
        select: {
            id: true,
            title: true,
            price: true,
            imageURLs: true,
            location: true,
            stock: true
        },
        orderBy: [
            sort === "price_max"
                ? {
                    price: "desc",
                }
                : sort === "price_min"
                    ? {
                        price: "asc",
                    }
                    : {
                        createdAt: "desc", // Default sorting for "newest"
                    },
        ],
    });

    return (
        <div className="p-16 py-32">
            <Explore post={posts}/>
        </div>
    )

}
