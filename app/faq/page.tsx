import Image from 'next/image'
import FAQItem from '@/components/faq/faq-item';
import { faqData } from '@/utils/faq-data';

const FAQ = () => {


  return (
    <section className="relative text-[#141414] flex items-center justify-center flex-col w-full px-8 lg:min-h-[1000px] lg:pt-11 lg:pb-[155px] lg:px-[93px]">
      <img
        src="/FAQ/right-illust.svg"
        alt=""
        className="absolute max-w-full max-h-full bottom-0 right-0"
      />
      <Image
      width={100}
      height={100}
        src="/FAQ/left-illust.svg"
        alt=""
        className="absolute max-w-full max-h-full top-0 left-0"
      />
      <div className="flex lg:gap-x-4">
        <img src="/why/before.svg" alt="" className="" />
        <h4 className="font-semibold lg:text-[40px]">FAQ</h4>
      </div>
      <div className="flex flex-col lg:gap-y-8 lg:mt-16">
        {faqData.map((faq) => {
          return (
            <FAQItem faq={faq} key={faq.id} />
          );
        })}

      </div>
    </section>
  );
}

export default FAQ