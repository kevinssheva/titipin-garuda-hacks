import Image from "next/image"; 

export default function Subcategory(props: any) {
  return (
    <div className="w-44 h-32 items-end flex justify-end cursor-pointer">
      <Image
        src={props.foto}
        width={176}
        height={50}
        alt="tas"
        className="blur-[1px] absolute -z-10 rounded-lg w-44 h-32 object-cover"
      />

      <p className="z-10 text-white font-semibold mr-2">{props.name}</p>
    </div>
  );
}
