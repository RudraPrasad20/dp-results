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

type CollegeCardProps = {
  name: string;
  location: string;
  id: string;
};

const ShowCard: React.FC<CollegeCardProps> = ({ name, location, id }) => {
  const router = useRouter();

  return (
    <Card className="hover:shadow-lg">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <p className=" flex gap-2">
          <MapPin />
          {location}
        </p>
        <CardDescription>2023</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-4 gap-3 ">
        <Button onClick={() => router.push(`/colleges/${id}/1`)}>SEM 1</Button>
        <Button onClick={() => router.push(`/colleges/${id}/2`)}>SEM 2</Button>
      </CardContent>
    </Card>
  );
};

export default ShowCard;
