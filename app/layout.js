import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Mazzanti',
    template: '%s - Mazzanti'
  },
  description: "Mazzanti",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-1 flex">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
