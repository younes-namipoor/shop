import Page from "./page";
import './global.css'
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--poppins-font",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal"],
  });

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        {children}
      </body>
    </html>
  );
}