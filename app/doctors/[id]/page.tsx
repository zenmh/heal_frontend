"use client";

import { FC } from "react";
import {
  About,
  BookingForm,
  Info,
  LocationAndContact,
  Reviews,
} from "@/components/doctor";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetDoctorQuery } from "@/redux/api/doctorApi";

interface DoctorDetailsProps {
  params: { id: string };
}

const DoctorDetails: FC<DoctorDetailsProps> = ({ params: { id } }) => {
  const { data: doctor, isLoading } = useGetDoctorQuery(id);

  if (isLoading) return <p>Loading...</p>;

  const { name, image, experiences, branch, email, contactNo, speciality } =
    doctor?.data;

  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      <div className="lg:col-span-2 md:col-span-2">
        <Info
          name={name}
          image={image}
          experiences={experiences}
          branch={branch}
          email={email}
          contactNo={contactNo}
          speciality={speciality}
        />
        <Tabs
          defaultValue="about"
          className="w-full mt-4 bg-secondary p-1 rounded-md"
        >
          <TabsList className="w-full py-6">
            <TabsTrigger
              value="about"
              className="font-bold text-md border-2 border-gray-400 rounded-none w-full"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="location_and_contact"
              className="font-bold text-md border-2 border-gray-400 border-l-0 rounded-none w-full"
            >
              Location & Contact
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="font-bold text-md border-2 border-gray-400 border-l-0 rounded-none w-full"
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <div className="p-4">
            <About />
            <LocationAndContact branch={branch} contactNo={contactNo} />
            <Reviews />
          </div>
        </Tabs>
      </div>
      <div className="lg:col-span-1 md:col-span-2 bg-secondary rounded-md">
        <BookingForm doctorId={id} />
      </div>
    </section>
  );
};

export default DoctorDetails;
