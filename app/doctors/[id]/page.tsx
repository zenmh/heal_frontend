"use client";

import { FC } from "react";

interface DoctorDetailsProps {
  params: { id: string };
}

const DoctorDetails: FC<DoctorDetailsProps> = ({ params }) => {
  return <div>doctor details</div>;
};

export default DoctorDetails;
