"use client";

import { FC } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface ServiceProps {
  title: string;
  description: string;
  href: string;
}

const Service: FC<ServiceProps> = ({ title, description, href }) => {
  const { push } = useRouter();

  return (
    <Card
      onClick={() => push(href)}
      className="w-[350px] p-4 hover:shadow-md transition duration-300 cursor-pointer bg-secondary"
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default Service;
