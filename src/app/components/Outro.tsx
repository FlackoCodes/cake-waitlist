import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export default function Outro() {


    return (
        <section className={`my-16 ${poppins.className}`}>
            <div className="w-[80%] my-0 mx-auto py-4 md:py-18 text-center">
                <h4 className="text-[#101828] text-lg font-bold md:text-2xl ">Be the first to know when <span className="block md:block text-center">we launch</span></h4>
                <p className="text-gray-600 text-xs font-bold my-4 md:text-xl">We’re still building. Join the waitlist and be notified when we <span className="block md:block text-center">release</span></p>
                <div className="flex flex-col md:flex-row justify-center gap-2 items-center md:my-2.5">
                    <input type="text" placeholder="Enter your email" className="border rounded-md border-gray-300 p-2 w-full md:w-[400px] lg:w-lg block md:inline focus:outline-none" />
                    <button className="bg-[#08a045] block w-full md:w-fit md:inline text-white py-2 px-4 rounded cursor-pointer">Join Waitlist</button>
                </div>
            </div>
        </section>
    )
}