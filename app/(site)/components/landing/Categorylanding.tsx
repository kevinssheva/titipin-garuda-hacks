import Image from "next/image";

export default function Categorylanding(props: any) {
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer">
            <Image src ={props.foto} width={80} height={80} alt="Category Name"/>
            <p className="text-center">{props.nama}</p>
        </div>
    )
}