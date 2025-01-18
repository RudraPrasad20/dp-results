"use client";
import ShowCard from "@/components/showCard";
import { Input } from "@/components/ui/input";
import { colleges } from "@/data/list";
import React from "react";

const CollegesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(colleges);

  React.useEffect(() => {
    // Make sure we start with a fresh copy of the colleges array
    const filtered = colleges.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Ensure there are no duplicates by creating a Set based on college ids
    const uniqueFilteredData: any = Array.from(
      new Set(filtered.map((college) => college.id))
    ).map((id) => filtered.find((college) => college.id === id));

    setFilteredData(uniqueFilteredData);
  }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-24 mx-6">
      {/* Center the search bar */}
      <div className="w-full mt-3 max-w-md">
        <Input
          placeholder="Search colleges..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full"
        />
      </div>

      {/* Cards Section */}
      <div className="mt-8 w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 ">
        {filteredData.length ? (
          filteredData.map((college) => (
            <ShowCard
              key={college.id}
              name={college.name}
              location={college.location}
              id={college.id}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default CollegesPage;
