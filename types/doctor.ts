type TDoctor = {
  id: string;
  name: string;
  email: string;
  contactNo: string;
  image?: string;
  experiences: string;
  speciality: string;
  branch: string;
  reviews: any[];
  createdAt: Date;
  updatedAt: Date;
};

export type { TDoctor };
