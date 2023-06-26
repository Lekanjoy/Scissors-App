"use client";
import { useState, useEffect, useContext} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthContext from "@/AuthContext/authContext";
import Logo from "../../public/header/Logo.svg";

interface NavLinksProps {
  title: string;
  path: string;
}

const navLinks: NavLinksProps[] = [
  { title: "My URLs", path: "/myUrls" },
  { title: "Features", path: "/#features" },
  { title: "Pricing", path: "/#pricing" },
  { title: "Analytics ", path: "/#analytics" },
  { title: "FAQs ", path: "/#faq" },
];

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle =
    scrollPosition > 100 ? "bg-white shadow-md" : "bg-transparent";

  return (
    <header
      className={`${headerStyle} fixed left-0 top-0 z-[100] w-full flex py-3 justify-between items-center px-8 lg:px-[93px]`}
    >
      <Link href="/">
        <Image src={Logo} alt="Scissors App Logo" />
      </Link>
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
        {user ? (
          <button
            onClick={logoutUser}
            className="bg-[#005AE2] px-8 py-2 text-white rounded-[100px] ease-in-out duration-300 hover:bg-blue-600 hover:scale-95"
          >
            Log out
          </button>
        ) : (
          <Link href="/login" className="text-[#0065FE] font-semibold">
            Log in
          </Link>
        )}
        {!user && (
          <Link
            href="/signup"
            className="bg-[#005AE2] px-6 py-3 text-white rounded-[100px] ease-in-out duration-300 hover:bg-blue-600 hover:scale-95"
          >
            Try for free
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
