import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative flex justify-between text-[#112232] text-sm px-8 lg:px-[93px] lg:gap-x-5 lg:pt-[95px] lg:pb-10 2xl:gap-x-[63px]">
      <img
        src="/footer/right-illust.svg"
        alt=""
        className="absolute max-w-full max-h-full bottom-0 right-0"
      />
      <img
        src="/CTA/left-illust.svg"
        alt=""
        className="absolute max-w-full max-h-full bottom-0 -left-[350px] rotate-180"
      />
      <div className="flex flex-col lg:gap-y-10">
        <img src="/footer/Logo.svg" alt="Scissor Logo" />
        <div className="flex items-center lg:gap-x-6">
          <img src="/footer/twitter.svg" alt="Twitter Icon" />
          <img src="/footer/instagram.svg" alt="instagram Icon" />
          <img src="/footer/linkedin.svg" alt="linkedin Icon" />
          <img src="/footer/facebook.svg" alt="facebook Icon" />
        </div>
      </div>
      <div className="flex flex-col lg:gap-y-14">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-[#071827] font-semibold text-base">
            Why Scissor ?
          </h4>
          <Link href="/">Scissor 101 </Link>
          <Link href="/">Integrations & API </Link>
          <Link href="/">Pricing</Link>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-[#071827] font-semibold text-base">Resources</h4>
          <Link href="/">Blog </Link>
          <Link href="/">Resource Library</Link>
          <Link href="/">Developers</Link>
          <Link href="/">App Connectors </Link>
          <Link href="/">Support </Link>
          <Link href="/">Trust Center </Link>
          <Link href="/"> Browser Extension </Link>
          <Link href="/">Mobile App </Link>
        </div>
      </div>
      <div className="flex flex-col lg:gap-y-14">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-[#071827] font-semibold text-base">Solutions</h4>
          <Link href="/">Social Media </Link>
          <Link href="/">Digital Marketing </Link>
          <Link href="/">Customer Service</Link>
          <Link href="/">For Developers</Link>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-[#071827] font-semibold text-base">Features</h4>
          <Link href="/">Branded Links </Link>
          <Link href="/">Mobile Links</Link>
          <Link href="/">Campaign Management & Analytic</Link>
          <Link href="/">QR Code generation </Link>
        </div>
      </div>
      <div className="flex flex-col lg:gap-y-14">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-[#071827] font-semibold text-base">Products</h4>
          <Link href="/">Link Management </Link>
          <Link href="/">QR Codes </Link>
          <Link href="/">Link-in-bio </Link>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-[#071827] font-semibold text-base">Legal</h4>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Cookie Policy</Link>
          <Link href="/">Terms of Servicec</Link>
          <Link href="/"> Acceptable Use Policy</Link>
          <Link href="/"> Code of Conduct </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="text-[#071827] font-semibold text-base">Company</h4>
        <Link href="/">About Scissor </Link>
        <Link href="/">Careers </Link>
        <Link href="/">Partners </Link>
        <Link href="/">Press </Link>
        <Link href="/">Contact </Link>
        <Link href="/">Reviews </Link>
      </div>
    </footer>
  );
};

export default Footer;
