import Logo from "@/img/Logo.png";
import RegisBtn from "../btn/btn";
import Link from "next/link";
const Navbar = () => {
    return (
        <div className="flex items-center justify-between bg-[#353535] p-2 sticky top-0">
            <Link href="/"><img src={Logo.src} alt="Logo" className="w-36 ml-20" /></Link>
            <div>
                <ul className="flex gap-7">
                    <li className="hover:text-green-600"><Link href="/">Course</Link></li>
                    <li className="hover:text-green-600"><Link href="/about">About</Link></li>
                    <li className="hover:text-green-600"><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <RegisBtn />
        </div>
    );
};

export default Navbar;