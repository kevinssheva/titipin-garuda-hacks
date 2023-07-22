import ClientProductDetail from "./component/ClientComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { Session } from "next-auth";

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const session = await getServerSession(authOptions) as Session;
  return <ClientProductDetail id={id} session={session}/>;
}

export default ProductDetail;
