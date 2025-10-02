import { Poppins } from "next/font/google";
import Image from "next/image";
import iphone from "../../../public/newCake.jpg";
import WaitlistForm from "./WaitlistForm";

const poppins = Poppins({
  weight: ["400", "700"],
  preload: false,
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Hero() {
  return (
    <section className={`w-[80%] my-0 mx-auto ${poppins.className}`}>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-4 lg:gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="md:text-3xl lg:text-4xl font-bold md:w-[400px]">
            Delightful <span className="text-blue-500">Cakes</span> & Lovely{" "}
            <span className="text-blue-500">Blooms</span>, Crafted for You.
          </h1>

          <p className="text-[#52525B] font-bold">
            Freshly baked happiness and beautiful flowers, anytime you need
            them.
          </p>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <WaitlistForm />
          </div>
        </div>
        <div className="my-2">
          <Image
            priority
            src={iphone}
            alt="iphone 15 pro max"
            className="w-[250px] my-0 mx-auto rounded"
          />
        </div>
      </div>
    </section>
  );
}
