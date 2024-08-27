import { ModeToggle } from "@/components/modeToggle";
import { colleges } from "@/data/list";
import Link from "next/link";
import React from "react";


const page = () => {

  
  return (
    <div>
      Results{" "}
      
      <div>
        <ModeToggle />
      </div>
      <Link href={"/colleges"}>COLLEGES</Link>
    </div>
  );
};

export default page;
