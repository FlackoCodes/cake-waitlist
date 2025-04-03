import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export default function Nav() {
    return (
        <nav className={`text-center p-8 ${poppins.className}`}>
            <div className="border rounded-full justify-between items-center flex gap-4 border-gray-300 md:w-[400px] md:my-0 md:mx-auto p-2">
                <span className="font-bold text-[#0C0A0A]">Benovogh</span>
                <button className="rounded-full py-2 px-4 text-white bg-[#08A045] text-sm cursor-pointer">
                    Join Waitlist
                </button>
            </div>
        </nav>
    );
}
