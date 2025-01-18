"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const FooterCTA = () => {
  return (
    <div className="wrapper group">
      <div className="relative flex flex-col items-center justify-center h-[75vh] md:h-[45vh] mx-10 rounded-3xl bg-gradient-to-b my-8 from-blue-700 to-pink-500 p-8 overflow-hidden">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex flex-col gap-2 md:w-[70%]">
            <h3 className="text-3xl font-medium text-white md:text-4xl tracking-tighter">
              Every developer deserves to be a great Engineer
            </h3>
            <p className="text-lg md:text-xl text-white/80">
              Let us know your feedback. What else could we deliver!
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <Input placeholder="Mail us..." />
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
