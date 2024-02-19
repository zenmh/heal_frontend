import { TBranch, TSpeciality } from "./constant";
import { TUser } from "./user";

type TDoctor = {
  id: string;
  contactNo: string;
  experiences: string;
  about: string;
  visit: number;
  speciality: TSpeciality;
  branch: TBranch;
  userId: string;
  user: TUser;
  createdAt: string;
  updatedAt: string;
};

export type { TDoctor };
