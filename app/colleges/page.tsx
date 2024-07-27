
import ShowCard from "@/components/showCard";

const colleges = [
  {
    name: "ROLAND INSTITUTE OF TECHNOLOGY, BERHAMPUR",
    location: "",
    year: 2023,
    id: "roland",
  },
  {
    name: "VIGNAN INSTITUTE OF TECHNOLOGY, BERHAMPUR",
    location: "",
    year: 2023,
    id: "vignan",
  },
  {
    name: "KALAM INSTITUTE OF TECHNOLOGY, BERHAMPUR",
    location: "",
    year: 2023,
    id: "kalam",
  },
  // Add more college data here
];

const CollegesPage = () => {
  return (
    <div className="grid justify-between gap-5 grid-cols-1 sm:grid-cols-2">
      {colleges.map((college) => (
        <ShowCard
          key={college.id}
          name={college.name}
          location={college.location}
          year={college.year}
          id={college.id}
        />
      ))}
    </div>
  );
};

export default CollegesPage;
