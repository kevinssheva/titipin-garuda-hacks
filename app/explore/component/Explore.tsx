"use client"

import Subcategory from "./Subcategory";
import Productbox from "@/app/(site)/components/landing/Productbox";
import { useRouter } from "next/navigation";

interface Post {
  id: string;
  title: string;
  price: number;
  location: string;
  imageURLs: string[];
  stock: number;
}

export default function Explore({ post }: { post: Post[] }) {
  const router = useRouter();

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    router.push(`/explore?category=${encodeURIComponent(selectedCategory)}`);
  };

  return (
    <>
      <h3 className="text-2xl font-light mb-8">Mens Fashion</h3>

      <h1 className="text-3xl mb-8 text-mariner-500 font-semibold">Jastip Mens Fashion</h1>
      <p className="font-light text-2xl mb-6">
        Yuk titip barang yang kamu mau!
      </p>

      <div className="flex w-3/4 gap-4 flex-wrap">
        <Subcategory foto="/explore/pria/taspria.jpg" name="Tas & Dompet" />
        <Subcategory foto="/explore/pria/baju.jpg" name="Baju" />
        <Subcategory foto="/explore/pria/jam.jpg" name="Jam" />
        <Subcategory foto="/explore/pria/sepatu.jpg" name="Sepatu" />
        <Subcategory foto="/explore/pria/glasses.jpg" name="Kacamata" />
      </div>

      <div className="flex gap-5">
        <div className="mt-12 p-3 rounded-full border border-mariner-500 w-44">
          <select className="text-mariner-500" onChange={handleCategoryChange}>
            <option value="Men Fashion">Men Fashion</option>
            <option value="Women Fashion">Woman Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="FnB">FnB</option>
            <option value="Cosmetic">Cosmetic</option>
            <option value="Sports">Sports</option>
            <option value="Art and Craft">Art and Craft</option>
            <option value="Toys">Toys</option>
            <option value="Shoes">Shoes</option>
            <option value="Books">Books</option>
          </select>
        </div>

        <div className="mt-12 p-3 rounded-full border border-mariner-500 w-52">
          <select className="text-mariner-500">
            <option value="Best Match">Best Match</option>
            <option value="Newest">Newest</option>
            <option value="Harga-Tinggi">High To Low (Price)</option>
            <option value="Harga-Rendah">Low To High (Price)</option>
          </select>
        </div>
      </div>

      <div className="flex-wrap flex gap-8 mt-12">
        {post.map((product, index) => (
          <div key={index}>
            <Productbox
              image={product.imageURLs[0]}
              name={product.title}
              price={product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0
              })}
              location={product.location}
              sold={product.stock}
            />
          </div>
        ))}
      </div>
    </>
  );
}
