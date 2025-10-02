import Image from "next/image";
import mainOne from "../../../public/cake.jpg";
import mainTwo from "../../../public/flowers.jpg";
import checkMark from "../../../public/check.png";
import { data } from "../data";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  preload: false,
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Main() {
  return (
    <div className={`w-[80%] my-0 mx-auto ${poppins.className}`}>
      <section className="my-16">
        <div className="text-center">
          <h3 className="my-2 font-bold text-[#000000] md:text-2xl">
            Share Love, One Treat at a Time
            <span className="block text-center">need</span>
          </h3>
          <p className="text-[#475467] md:text-xl">
            Send cakes, pastries, and flowers to brighten someone's day.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center items-center my-8 gap-4">
          <Image
            className="w-[350px] rounded"
            src={mainOne}
            alt="fakye social image"
          />
          <Image
            className="w-[350px] rpunded"
            src={mainTwo}
            alt="group of peole donating"
          />
        </div>
      </section>
      <section className="my-8 md:my-12">
        <div className="text-center my-12">
          <h3 className="my-2 font-bold text-[#000000] md:text-2xl">
            More Than Gifts....Your Everyday Delight
          </h3>
          <p className="text-[#475467] md:text-xl">
            Treat yourself or someone special with flavors and flowers that
            inspire
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((data, index) => (
            <div
              className="flex flex-col py-4 px-2 gap-2  rounded-lg border-2 border-blue-500 justify-center items-center"
              key={index}
            >
              <Image
                src={checkMark}
                alt="checkmark "
                className="bg-blue-600 p-2 rounded-full"
              />
              <h2 className="font-bold text-[#1E1E1E] md:text-[18px] text-center xl:text-[20px]">
                {data.title}
              </h2>
              <p className="text-[#475467]  md:w-[220px] my-0 mx-auto md:text-[18px] text-center">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
