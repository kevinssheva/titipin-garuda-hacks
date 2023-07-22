import Sell from "./component/Sell";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth"

interface User {
    name: string;
    email: string;
    image: string;
    id: string;
}

export default async function SellPage() {
    const session = await getServerSession(authOptions);

    const user = session?.user as User;
    return (
        <div className="px-16 lg:py-36 py-28">
            <Sell user={user} />
        </div>
    );
}