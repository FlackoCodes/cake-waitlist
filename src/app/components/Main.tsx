import Image from "next/image"
import mainOne from "../../../public/main1.png"
import mainTwo from "../../../public/donating.png"
import checkMark from "../../../public/check.png"
import { data } from "../data"
import { Poppins } from "next/font/google"


const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export default function Main() {

    

    return (
        <div className={`w-[80%] my-0 mx-auto ${poppins.className}`}>
            <section className="my-16">
                <div className="text-center">
                    <h3 className="my-2 font-bold text-[#000000] md:text-2xl">Share items you no longer <span className="block text-center">need</span></h3>
                    <p className="text-[#475467] md:text-xl">Give your pre-loved items a new home and help others in need</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-center items-center my-8">
                    <Image src={mainOne} alt="fakye social image" />
                    <Image src={mainTwo} alt="group of peole donating" />
                </div>
            </section>
            <section className="my-8 md:my-12">
                <div className="text-center my-12">
                    <h3 className="my-2 font-bold text-[#000000] md:text-2xl">Giving & Sharing for a Better World</h3>
                    <p className="text-[#475467] md:text-xl">Reduce waste, uplift communities, and make a positive impact—one <span className="block md:block text-center">shared item at a time!</span></p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data.map((data, index) =>
                            <div className="flex flex-col py-4 px-2 gap-2  rounded-lg border-2 border-[#08A045] justify-center items-center" key={index}>
                                <Image src={checkMark} alt="checkmark " className="bg-[#08A045] p-2 rounded-full" />
                                <h2 className="font-bold text-[#1E1E1E] md:text-[18px] text-center xl:text-[20px]">{data.title}</h2>
                                <p className="text-[#475467]  md:w-[220px] my-0 mx-auto md:text-[18px] text-center">{data.description}</p>
                            </div>
                        )
                    }
                </div>
            </section>
        </div>
    )
}
