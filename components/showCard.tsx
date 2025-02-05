import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type CollegeCardProps = {
  name: string;
  location: string;
  id: string;
};

const ShowCard: React.FC<CollegeCardProps> = ({ name, location, id }) => {
  const router = useRouter();
  const [batch, setBatch] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);

  const isDisabled = !batch || !year;

  return (
    <Card className="hover:shadow-lg ">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <p className="flex gap-2">
          <MapPin />
          {location}
        </p>

       <CardDescription/>
        <div className="flex gap-5">
          <Select onValueChange={(value) => setBatch(value.slice(0, 5))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="B.Tech">BTECH</SelectItem>
              {/* <SelectItem value="BCA">BCA</SelectItem> */}
              <SelectItem value="MBA">MBA</SelectItem>
              <SelectItem value="MCA">MCA</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setYear}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-4 gap-3">
        <Button
          onClick={() =>
            router.push(`/colleges/${id}/1?batch=${batch}&year=${year}`)
          }
          disabled={isDisabled}
        >
          SEM 1
        </Button>
        <Button
          onClick={() =>
            router.push(`/colleges/${id}/2?batch=${batch}&year=${year}`)
          }
          disabled={isDisabled}
        >
          SEM 2
        </Button>
        <Button
          onClick={() =>
            router.push(`/colleges/${id}/3?batch=${batch}&year=${year}`)
          }
          disabled={isDisabled}
        >
          SEM 3
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShowCard;
