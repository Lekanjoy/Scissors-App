"use client";
import Footer from '@/components/footer';
import './globals.css'
import { usePathname } from "next/navigation";
import Header from '@/components/header'

export const metadata = {
  title: 'Scissors App',
  description: 'Shorten your links with Scissors App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isRegistrationPage = pathname === '/signup' || pathname === '/login';
  return (
    <html lang="en">
      <body className="relative font-[Nunito] ">
        {isRegistrationPage ? null : <Header />}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
