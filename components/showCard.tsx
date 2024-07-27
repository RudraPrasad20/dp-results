
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPinned } from 'lucide-react';

type CollegeCardProps = {
  name: string;
  location: string
  year: number;
  id: string;
};

const ShowCard: React.FC<CollegeCardProps> = ({ name,location, year, id }) => {
  const router = useRouter();

  return (
    <Card className="hover:shadow-lg">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription><MapPinned />{location}</CardDescription>
        <p>{year}</p>
      </CardHeader>
      <CardContent className="flex gap-2">
        <Button onClick={() => router.push(`/colleges/${id}/1`)}>SEM 1</Button>
        <Button onClick={() => router.push(`/colleges/${id}/2`)}>SEM 2</Button>
      </CardContent>
    </Card>
  );
};

export default ShowCard;
