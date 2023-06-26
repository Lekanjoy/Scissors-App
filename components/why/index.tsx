import Image from "next/image";
import link from "../../public/why/link-2.svg";
import custom from "../../public/why/edit.svg";
import qr from "../../public/why/grid.svg";
import analytics from "../../public/why/activity.svg";
import before from "../../public/why/before.svg";

const Why = () => {
  return (
    <section id='features' className="bg-white text-blackVariant flex justify-between lg:gap-x-24 px-8 lg:px-[93px] lg:py-[136px]">
      <div className="flex flex-col max-w-[420px] ">
        <h3 className="flex whitespace-nowrap lg:mb-6 lg:font-bold lg:text-[40px]">
          <Image src={before} alt="" className="lg:mr-4" />
          <span>Why choose</span>
          <span className="text-[#005AE2] lg:ml-4"> Scissors</span>
        </h3>
        <p className="font-medium text-sm lg:text-base">
          Scissors is the hub of everything that has to do with your link
          management. We shorten your URLs, allow you creating custom ones for
          your personal, business, event usage. Our swift QR code creation,
          management and usage tracking with advance analytics for all of these
          is second to none.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-7 gap-y-16">
        <div className="flex flex-col">
          <div className="flex justify-center items-center rounded-full bg-[rgba(50,_132,_255,_0.13)] lg:w-[56px]  lg:h-[56px]">
            <Image src={link} alt="Link icon" />
          </div>
          <h4 className="lg:text-[32px] lg:font-semibold lg:mt-10 lg:mb-4">
            URL Shortening
          </h4>
          <p className="text-sm lg:font-medium lg:text-base">
            Scissor allows you to shorten URLs of your business, events. Shorten
            your URL at scale, URL redirects.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center items-center rounded-full bg-[rgba(50,_132,_255,_0.13)] lg:w-[56px]  lg:h-[56px]">
            <Image src={custom} alt="Edit icon" />
          </div>
          <h4 className="lg:text-[32px] lg:font-semibold lg:mt-10 lg:mb-4">
            Custom URLs
          </h4>
          <p className="text-sm lg:font-medium lg:text-base">
            With Scissor, you can create custom URLs, with the length you want!
            A solution for socials and businesses.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center items-center rounded-full bg-[rgba(50,_132,_255,_0.13)] lg:w-[56px]  lg:h-[56px]">
            <Image src={qr} alt="QR code icon" />
          </div>
          <h4 className="lg:text-[32px] lg:font-semibold lg:mt-10 lg:mb-4">
            QR Codes
          </h4>
          <p className="text-sm lg:font-medium lg:text-base">
            Generate QR codes to your business, events. Bring your audience and
            customers to your doorstep with this scan and go solution.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center items-center rounded-full bg-[rgba(50,_132,_255,_0.13)] lg:w-[56px]  lg:h-[56px]">
            <Image src={analytics} alt="analytics icon" />
          </div>
          <h4 className="lg:text-[32px] lg:font-semibold lg:mt-10 lg:mb-4">
            Data Analytics
          </h4>
          <p className="text-sm lg:font-medium lg:text-base">
            Receive data on the usage of either your shortened URL, custom URLs
            or generated QR codes. Embedded to monitor progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
