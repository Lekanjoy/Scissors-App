"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from '@/components/footer';
import './globals.css'
import { usePathname } from "next/navigation";
import Header from '@/components/header'
import { AuthProvider } from '@/AuthContext/authContext';

// export const metadata = {
//   title: 'Scissors App',
//   description: 'Shorten your links with Scissors App',
// }

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
        <AuthProvider>
          {isRegistrationPage ? null : <Header />}
          {children}
          <Footer />
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
