import { ModeToggle } from "@/components/modeToggle";
import CommandSearch from "@/components/searchbar";
import { colleges } from "@/data/list";
import React from "react";


const page = () => {
  const commands = colleges.map(item => ({
    value: item.id,
    label: item.name,
  }));

  
  return (
    <div>
      Results{" "}
      
      <div>
        <ModeToggle />
      </div> <CommandSearch commands={commands} />;
    </div>
  );
};

export default page;
