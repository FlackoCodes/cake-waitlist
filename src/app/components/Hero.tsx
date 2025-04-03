import { Poppins } from "next/font/google";
import Image from "next/image";
import iphone from "../../../public/iphone.png";

const poppins = Poppins({
    weight: ["400", "700"]
});

export default function Hero() {
    return (
        <section className={`w-[80%] my-0 mx-auto ${poppins.className}`}>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-4 lg:gap-16">
                <div className="flex flex-col gap-4">
                    <h1 className="md:text-3xl lg:text-4xl font-bold md:w-[400px]">
                        Enjoy Unlimited Access to Exclusive{" "}
                        <span className="text-[#08A045]">Free Items</span>, Anytime!
                    </h1>
                    <p className="text-[#52525B] font-bold">
                        Get exclusive access to free items effortlessly—no limits, no
                        hassle!
                    </p>
                    <div className="flex flex-col md:flex-row gap-2 items-center">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="border rounded-md border-gray-300 p-2 w-full md:w-fit block md:inline focus:outline-none"
                        />
                        <button className="bg-[#08a045] block w-full md:w-fit md:inline text-white py-2 px-4 rounded cursor-pointer">
                            Join Waitlist
                        </button>
                    </div>
                </div>
                <div className="my-2">
                    <Image
                        src={iphone}
                        alt="iphone 15 pro max"
                        className="w-[200px] my-0 mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}
