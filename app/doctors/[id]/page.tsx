"use client";

import Image from "next/image";
import { FC } from "react";

interface DoctorDetailsProps {
  params: { id: string };
}

const DoctorDetails: FC<DoctorDetailsProps> = ({ params }) => {
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      <div className="lg:col-span-2 md:col-span-2 border-2 border-sky-400">
        <div className="border-2 border-primary mb-4">]</div>
        <div className="border-2 border-primary"></div>
      </div>
      <div className="lg:col-span-1 md:col-span-2 border-2 border-primary"></div>
    </section>
  );
};

export default DoctorDetails;
