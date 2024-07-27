"use client";
import ShowCard from "@/components/showCard";

const colleges = [
  {
    name: "ROLAND INSTITUTE OF TECHNOLOGY",
    location: "BERHAMPUR",
    id: "ACEANG",
  },
  {
    name: "VIGNAN INSTITUTE OF TECHNOLOGY",
    location: "BERHAMPUR",
    id: "ABITCTC",
  },
  {
    name: "KALAM INSTITUTE OF TECHNOLOGY",
    location: "BERHAMPUR",
    id: "AIETBBSR",
  },
];

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
