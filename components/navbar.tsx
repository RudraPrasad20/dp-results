// import React from 'react';
// import Link from 'next/link';
// import { ModeToggle } from './modeToggle';

// const Navbar = () => {
//   return (
//     <nav className="border-b p-4 z-50 relative">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Left: Company Name */}
//         <div className=" text-2xl font-bold">
//           <Link href="/">DIPNET</Link>
//         </div>

//         {/* Right: Button */}
//         <div>
//           {/* <Link href="/contact">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//               Contact Us
//             </button>
//           </Link> */}
//           <ModeToggle/>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



"use client";
import React from "react";


import { FloatingNav } from "./ui/floating-nav";
import { Home, MessageCircle, User } from "lucide-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Community",
      link: "/community",
      icon: <User className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Results",
      link: "/colleges",
      icon: (
        <MessageCircle className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

