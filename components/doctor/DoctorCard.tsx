import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MapPin, Star } from "lucide-react";
import { Branch, Speciality } from "@/types/constant";
import { useRouter } from "next/navigation";

interface DoctorProps {
  id: string;
  name: string;
  image?: string;
  experiences: string;
  branch: Branch;
  speciality: Speciality;
}

const DoctorCard: FC<DoctorProps> = ({
  id,
  name,
  image,
  experiences,
  branch,
  speciality,
}) => {
  const { push } = useRouter();

  return (
    <Card className="w-[300px] p-0">
      <CardHeader className="flex flex-row items-center justify-center m-0 p-0">
        <Avatar className="w-full h-auto rounded-none">
          <AvatarImage
            src={image}
            alt="doctor avatar"
            className="rounded-t-md"
          />
          <AvatarFallback className="text-[200px] font-semibold text-slate-600 rounded-t-md rounded-b-none">
            {name.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="mt-1 font-semibold">
        <h2 className="text-xl truncate">{name}</h2>
        <h4 className="my-1 text-slate-600">{experiences}</h4>
        <p className="mb-1">{speciality}</p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <MapPin className="mr-2" size={18} />
            <p>
              {branch.slice(0, 1)}
              <span className="lowercase">{branch.slice(1)}</span>
            </p>
          </div>
          <div className="flex flex-row items-center">
            <span className="mr-1">{4.5}</span>
            <Star size={18} fill="gold" color="gold" className="mt-[-1px]" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={() => push(`/doctors/${id}`)} className="w-full">
          Visit Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
