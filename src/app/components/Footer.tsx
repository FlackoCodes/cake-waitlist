export default function Footer() {

    const date = new Date()
    const currentYear = date.getFullYear()

    return (
        <div className="bg-[#08A045] text-white p-4 md:p-8 text-center text-sm md:text-xl lg:text-2xl font-[Poppins]">©  {currentYear}, Benevo Ghana. All rights reserved.</div>
    )
}
