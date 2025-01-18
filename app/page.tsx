import { Hero } from "@/components/hero";
import FooterCTA from "@/components/mailbox";
import React from "react";

const page = () => {
  return (
    <div className=" w-full">
      <Hero />
      <FooterCTA />
    </div>
  );
};

export default page;
