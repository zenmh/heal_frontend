"use client";

import { DoctorCard } from "@/components/doctor";
import { Button } from "@/components/ui/button";
import { useGetDoctorsQuery } from "@/redux/api/doctorApi";
import { TDoctor } from "@/types/doctor";
import { useRouter } from "next/navigation";

const Doctors = () => {
  const { push } = useRouter();
  const { data: doctors, isLoading } = useGetDoctorsQuery(undefined);

  console.log(doctors);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      {doctors?.data?.length ? (
        <div>
          <h3 className="text-2xl font-bold">Doctors</h3>
          <div className="flex flex-row justify-center flex-wrap gap-4">
            {doctors?.data.map(
              ({
                id,
                experiences,
                branch,
                speciality,
                user: { name, image },
              }: TDoctor) => (
                <DoctorCard
                  key={id}
                  id={id}
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
              <Button onClick={() => push("/")}>Back To Home</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Doctors;
