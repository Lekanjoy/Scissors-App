import React, {useContext} from 'react'
import Link from "next/link";
import { navLinks } from '..';
import { usePathname } from "next/navigation";
import AuthContext from "@/AuthContext/authContext";

const MobileNav = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const pathname = usePathname();
    
  return (
    <nav className="absolute left-0 top-[64px] w-[50vw] py-6 px-2 bg-primaryColor  text-white lg:hiddden ">
      <div className="w-full flex flex-col gap-y-6 justify-between items-center ">
        {navLinks.map((link) => {
          return (
            <Link
              key={link.title}
              href={link.path}
              className={
                pathname === link.path
                  ? "text-[#0065FE] bg-white w-full text-center px-8 py-2"
                  : ""
              }
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-y-3 mt-6">
        {user ? (
          <button
            onClick={logoutUser}
            className="text-[#005AE2] border  w-full px-8 py-2 bg-white  ease-in-out duration-300 hover:scale-95"
          >
            Log out
          </button>
        ) : (
          <Link
            href="/login"
            className="w-full px-8 py-2 text-center text-white border border-white font-semibold ease-in-out duration-300 hover:scale-95"
          >
            Log in
          </Link>
        )}
        {!user && (
          <Link
            href="/signup"
            className="text-[#005AE2] w-full px-8 py-2 text-center bg-white  ease-in-out duration-300 hover:scale-95"
          >
            Try for free
          </Link>
        )}
      </div>
    </nav>
  );
}

export default MobileNav