import Image from 'next/image'
import Header from '@/components/header'
import HeroPage from '@/components/hero'
import Analytics from '@/components/analytics'
import Why from '@/components/why'
import Pricing from '@/components/pricing'

export default function Home() {
  return (
    <main className="relative w-full">
      {/* <Header /> */}
      <HeroPage />
      <Analytics/>
      <Why/>
      <Pricing/>
    </main>
  );
}
//  px-8 lg:px-[93px]