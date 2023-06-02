import Image from 'next/image'
import Header from '@/components/header'
import HeroPage from '@/components/hero'
import Analytics from '@/components/analytics'
import bgHero from '../public/hero/heroBg.svg'

export default function Home() {
  return (
    <main className="relative w-full">
      {/* <Header /> */}
      <HeroPage />
      <Analytics/>
    </main>
  );
}
//  px-8 lg:px-[93px]