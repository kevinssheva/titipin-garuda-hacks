import Categorylanding from "./Categorylanding";
import Productbox from "./Productbox";

export default function Landing() {
  const productBoxContent = (
    <Productbox
      image="landing/Toys.svg"
      name="Toys"
      price="90.000"
      location="Singapore"
      rating="4.4"
      sold="10"
    />
  );

  return (
    <div className="p-16">
      <h1 className="font-semibold text-3xl mb-6 text-mariner-500">
        Explore Your Needs
      </h1>

      <div className="flex mb-28 justify-between gap-8 overflow-x-scroll lg:overflow-x-hidden">
        <Categorylanding foto="landing/Men Fashion.svg" nama="Men Fashion" />
        <Categorylanding
          foto="landing/Women Fashion.svg"
          nama="Women Fashion"
        />
        <Categorylanding foto="landing/Electronics.svg" nama="Electronics" />
        <Categorylanding foto="landing/fnb.svg" nama="FnB" />
        <Categorylanding foto="landing/Cosmetic.svg" nama="Cosmetic" />
        <Categorylanding foto="landing/Sports.svg" nama="Sports" />
        <Categorylanding foto="landing/Art & Craft.svg" nama="Art & Craft" />
        <Categorylanding foto="landing/Toys.svg" nama="Toys" />
        <Categorylanding foto="landing/Shoes.svg" nama="Shoes" />
        <Categorylanding foto="landing/Books.svg" nama="Books" />
      </div>

      <h1 className="font-semibold text-3xl mb-6 text-mariner-500">
        Reccomended For You
      </h1>

      <div className="flex flex-row flex-wrap items-center justify-center gap-8">
        {Array.from({ length: 24 }).map((_, index) => (
          <div key={index}>{productBoxContent}</div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="mt-12 bg-mariner-500 p-5 rounded-xl self-center">
          <p className="text-white text-center font-medium">Explore More</p>
        </div>
      </div>
    </div>
  );
}
