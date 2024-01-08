"use client";

import { DoctorCard } from "@/components/doctor";
import { Button } from "@/components/ui/button";
import { useGetDoctorsQuery } from "@/redux/api/doctorApi";
import { TDoctor } from "@/types/doctor";

const Doctors = () => {
  const { data: doctors, isLoading: getDoctorsIsLoading } =
    useGetDoctorsQuery(undefined);

  console.log(doctors);

  if (getDoctorsIsLoading) return <p>Loading...</p>;

  return (
    <section>
      {doctors?.data?.length ? (
        <div>
          <h3 className="text-2xl font-bold">Doctors</h3>
          <div className="flex flex-row justify-center flex-wrap gap-4">
            {doctors?.data.map(
              (
                { name, image, experiences, branch, speciality }: TDoctor,
                i: number
              ) => (
                <DoctorCard
                  key={i}
                  name={name}
                  image={image}
                  experiences={experiences}
                  branch={branch}
                  speciality={speciality}
                />
              )
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center min-h-screen">
          <div>
            <h3 className="text-2xl font-semibold">
              Sorry, No Doctors Are Abailable Now!
            </h3>
            <div className="flex flex-row items-center justify-center mt-2">
              <Button>Back To Home</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Doctors;
