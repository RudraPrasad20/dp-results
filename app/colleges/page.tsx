"use client";
import ShowCard from "@/components/showCard";
import { colleges } from "@/data/list";

const CollegesPage = () => {
  return (
    <div className="grid justify-between gap-5 grid-cols-1 sm:grid-cols-2">
      {colleges.map((college) => (
        <ShowCard
          key={college.id}
          name={college.name}
          location={college.location}
          id={college.id}
        />
      ))}
    </div>
  );
};

export default CollegesPage;
