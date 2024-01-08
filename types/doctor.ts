import { Branch, Speciality } from "./constant";

type TDoctor = {
  id: string;
  name: string;
  email: string;
  contactNo: string;
  image?: string;
  experiences: string;
  speciality: Speciality;
  branch: Branch;
  reviews: any[];
  createdAt: Date;
  updatedAt: Date;
};

export type { TDoctor };
