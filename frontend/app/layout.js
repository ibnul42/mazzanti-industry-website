import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TanstackProvider from "@/components/providers/TanstackProvider";
import PathCheck from "@/components/PathCheck";

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
      <body className={`${inter.className}`}>
        <TanstackProvider>
          <PathCheck>
            {children}
          </PathCheck>
        </TanstackProvider>
      </body>
    </html >
  );
}
