import RahnumaChatbot from "@/components/chatbotui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"> */}
       <RahnumaChatbot/>
      {/* </main> */}
    </div>
  );
}
