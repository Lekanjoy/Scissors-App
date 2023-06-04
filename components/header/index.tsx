"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/header/Logo.svg";

interface NavLinksProps {
  title: string;
  path: string;
}

const navLinks: NavLinksProps[] = [
  { title: "My URLs", path: "/" },
  { title: "Features", path: "/features" },
  { title: "Pricing", path: "/pricing" },
  { title: "Analytics ", path: "/analytics" },
  { title: "FAQs ", path: "/faq" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-[100] bg-white w-full shadow-md flex py-3 justify-between items-center px-8 lg:px-[93px]">
      <Image src={Logo} alt="Scissors App Logo" />
      <div className="flex justify-between gap-x-10 text-blackVariant">
        {navLinks.map((link) => {
          return (
            <Link
              key={link.title}
              href={link.path}
              className={pathname === link.path ? "text-[#0065FE]" : ""}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-x-9">
        <Link href="/login" className="text-[#0065FE] font-semibold">
          Log in
        </Link>
        <Link
          href="/try"
          className="bg-[#005AE2] px-6 py-3 text-white rounded-[100px]"
        >
          Try for free
        </Link>
      </div>
    </header>
  );
};

export default Header;
