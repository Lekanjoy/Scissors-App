import HeroPage from '@/components/hero'
import Analytics from '@/components/analytics'
import Why from '@/components/why'
import Pricing from '@/components/pricing'
import LinkShortenerForm from '@/components/shortener-form'
import CTA from '@/components/cta'
import FAQ from './faq/page'

export default function Home() {
  return (
    <main className="relative w-full">
      <HeroPage />
      <Analytics/>
      <Why/>
      <Pricing/>
      <LinkShortenerForm/>
      <FAQ/>
      <CTA/>
    </main>
  );
}
//  px-8 lg:px-[93px]