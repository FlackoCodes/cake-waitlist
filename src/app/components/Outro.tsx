"use client";
import { Poppins } from "next/font/google";
import WaitlistForm from "./WaitlistForm";

const poppins = Poppins({
  weight: ["400", "700"],
  preload: false,
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Outro() {
  return (
    <section className={`my-16 ${poppins.className}`}>
      <div className="w-[80%] mx-auto py-4 md:py-18 text-center">
        <h4 className="text-[#101828] text-lg font-bold md:text-2xl">
          Be the first to know when
          <span className="block text-center">we launch</span>
        </h4>
        <p className="text-gray-600 text-xs font-bold my-4 md:text-xl">
          We&apos;re still building. Join the waitlist and be notified when we
          <span className="block text-center">release</span>
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-2 items-center md:my-2.5">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
