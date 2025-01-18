"use client"

import { BackgroundLines } from "./ui/background-lines";
import { Button } from "./ui/button";

// import React from "react";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import { Button } from "./ui/button";
// import { useRouter } from "next/navigation";

// export function Hero() {
//   const router = useRouter()
//   return (
//     <>
//     <BackgroundLines className="flex items-center justify-center w-full flex-col ">
//       <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
//         Finding Results? <br /> Here We Go...
//       </h2>
//       {/* <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
//         No Need to wonder for results anymore,
//         any time anywhere with dipnet
//       </p> */}
//     </BackgroundLines>
// </>
//   );
// }


export function Hero() {

  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full h-screen flex-col">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans py-4 sm:py-6 md:py-10 relative z-20 font-bold tracking-tight">
          Finding Results? <br /> Here We Go...
        </h2>
        <Button>Find Results</Button>
      </BackgroundLines>
    </>
  );
}
