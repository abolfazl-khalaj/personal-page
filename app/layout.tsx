import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/template/SideBar";
import SideBarPhone from "@/components/template/SideBarPhone";



export const metadata: Metadata = {
  title: "abolfazl hassanzade khalaj",
  description: "Abolfazl Hassanzadeh Khalaj's personal page | Front-End developer",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className="antialiased text-slate-200 flex"
        style={{ margin: 0, minHeight: "100vh"}}
      >
        <div
          className="relative flex w-full h-full"
          style={{ display: "flex", width: "100%" }}
        >
          
          <div
            className=" hidden md:flex"
            style={{
              width: "20%",
              maxWidth: "400px", 
            }}
          >
            <SideBar />
          </div>

          <div
            className="bg-gray-700 flex-grow min-h-screen"
            style={{
              width: "70%",
            }}
          >
            {children}
          </div>

          <div>
            <div className="fixed w-full bottom-0 left-0 right-0 text-white h-20 pb-5 flex md:hidden border-t bg-cyan-900">
              <SideBarPhone/>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
