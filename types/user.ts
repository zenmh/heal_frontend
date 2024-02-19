import EUser from "@/enums/user";

type TUser = {
  id: string;
  name: string;
  email: string;
  role: EUser;
  image?: string;
  createdAt: string;
  updatedAt: string;
};

export type { TUser };
