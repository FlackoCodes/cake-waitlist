import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const GITHUB = "https://github.com/FlackoCodes";

  return (
    <div className="bg-blue-500 text-white p-4 md:p-8 text-center text-sm md:text-xl lg:text-2xl font-[Poppins]">
      © {currentYear}, Primal Ghana. All rights reserved.
      <Link className="italic font-semibold text-2xl" href={GITHUB}>
        Flacko
      </Link>
    </div>
  );
}
