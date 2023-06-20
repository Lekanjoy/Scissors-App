import React from 'react'

const FAQ = () => {
  return (
    <section className="relative flex items-center flex-col w-full px-8 lg:min-h-[1000px] lg:pt-11 lg:pb-[155px] lg:px-[93px]">
      <img
        src="/FAQ/right-illust.svg"
        alt=""
        className="absolute max-w-full max-h-full bottom-0 right-0"
      />
      <img
        src="/FAQ/left-illust.svg"
        alt=""
        className="absolute max-w-full max-h-full top-0 left-0"
      />
      <div className="flex lg:gap-x-4">
        <img src="/why/before.svg" alt="" className="" />
        <h4 className="text-[#141414] font-bold lg:text-[40px]">FAQ</h4>
      </div>
    </section>
  );
}

export default FAQ