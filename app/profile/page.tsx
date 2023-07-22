import Profile from "./component/Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth"

interface User {
    name: string;
    email: string;
    image: string;
    id: string;
}

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);

    const user = session?.user as User;

    return (
        <div className="px-12 lg:px-24  lg:py-36 py-28">
            <Profile user={user}/>
        </div>
    );
}