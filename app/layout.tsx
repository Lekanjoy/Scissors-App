import './globals.css'
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
  return (
    <html lang="en">
      <body className="font-[poppins] ">
        <Header />
        {children}
      </body>
    </html>
  );
}
