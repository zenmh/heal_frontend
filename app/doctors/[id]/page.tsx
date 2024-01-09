"use client";

import { useGetDoctorQuery } from "@/redux/api/doctorApi";
import { AtSign, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface DoctorDetailsProps {
  params: { id: string };
}

const DoctorDetails: FC<DoctorDetailsProps> = ({ params: { id } }) => {
  const { data: doctor, isLoading: getDoctorIsLoading } = useGetDoctorQuery(id);

  if (getDoctorIsLoading) return <p>Loading...</p>;

  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      <div className="lg:col-span-2 md:col-span-2 border-2 border-sky-400">
        <div className="rounded-lg flex flex-col md:flex-row border-2 border-green-500">
          <Image
            src={
              doctor?.data?.image
                ? doctor?.data?.image
                : "/images/doctor_avatar.webp"
            }
            alt="doctor"
            width={300}
            height={300}
            className="rounded-l-lg"
          />
          <div className="p-3">
            <h2 className="text-2xl font-semibold text-[#00ACB1] mb-1">
              {doctor?.data?.name}
            </h2>
            <p className="mt-2 text-gray-400">{doctor?.data?.experiences}</p>
            <strong className="dark:text-gray-400 text-gray-500">
              {doctor?.data?.speciality.slice(0, 1)}
              <span className="lowercase">
                {doctor?.data?.speciality.slice(1)}
              </span>
            </strong>
            <div className="flex flex-row items-center justify-start mt-2">
              <span className="flex flex-row items-center justify-start gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, i: number) => (
                    <Star key={i} fill="#FCB71B" color="#FCB71B" size={20} />
                  ))}
              </span>
              <span className="text-gray-400 ml-4">(4/5)</span>
            </div>
            <div className="flex flex-row items-center justify-start mt-8">
              <Phone size={20} color="#00ACB1" />
              &nbsp;
              <span className="text-gray-400">
                +880&nbsp;1{doctor?.data?.contactNo}
              </span>
            </div>
            <div className="flex flex-row items-center justify-start my-3">
              <AtSign size={20} color="#00ACB1" />
              &nbsp;<span className="text-gray-400">{doctor?.data?.email}</span>
            </div>
            <div className="flex flex-row items-center justify-start">
              <MapPin size={20} color="#00ACB1" />
              &nbsp;
              <span className="text-gray-400">
                {doctor?.data?.branch.slice(0, 1)}
                <span className="lowercase">
                  {doctor?.data?.branch.slice(1)}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="border-2 border-primary"></div>
      </div>
      <div className="lg:col-span-1 md:col-span-2 border-2 border-primary"></div>
    </section>
  );
};

export default DoctorDetails;
