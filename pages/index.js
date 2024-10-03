import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div class="roundedBox">
          <Image 
          src={"/image-qr-code.png"} 
          alt="QR code Image"
          width={288}
          height={288}
          className="rounded-lg m-auto mt-[8px]">
          </Image>
          <p className="font-outfit text-[22px] text-slate-900 text-center font-bold m-[8px] mt-[16px]">Improve your front-end skills by building projects</p>
          <p className="font-outfit text-[15px] text-slate-900 text-center m-[16px] ml-[24px] mr-[24px]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </main>
    </div>
  );
}
