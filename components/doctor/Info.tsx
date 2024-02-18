import { FC } from "react";
import Image from "next/image";
import { Branch, Speciality } from "@/types/constant";
import { FiAtSign, FiMapPin, FiPhone, FiStar } from "react-icons/fi";

interface InfoProps {
  name: string;
  image?: string;
  experiences: string;
  branch: Branch;
  email: string;
  contactNo: string;
  speciality: Speciality;
}

const Info: FC<InfoProps> = ({
  name,
  image,
  experiences,
  branch,
  email,
  contactNo,
  speciality,
}) => {
  return (
    <div className="rounded-lg flex flex-col md:flex-row items-center bg-secondary">
      <Image
        src={image ? image : "/images/doctor_avatar.webp"}
        alt="doctor"
        width={300}
        height={300}
        className="rounded-l-lg"
      />
      <div className="p-3">
        <h2 className="text-2xl font-semibold text-primary mb-1">{name}</h2>
        <p className="mt-2 text-gray-400">{experiences}</p>
        <strong className="dark:text-gray-400 text-gray-500">
          {speciality.slice(0, 1)}
          <span className="lowercase">{speciality.slice(1)}</span>
        </strong>
        <div className="flex flex-row items-center justify-start mt-2">
          <span className="flex flex-row items-center justify-start gap-1">
            {Array(5)
              .fill(null)
              .map((_, i: number) => (
                <FiStar key={i} fill="gold" color="gold" size={20} />
              ))}
          </span>
          <span className="text-gray-400 ml-4">(4/5)</span>
        </div>
        <div className="flex flex-row items-center justify-start mt-8">
          <FiPhone size={20} color="#00ACB1" />
          &nbsp;
          <span className="text-gray-400">+880&nbsp;1{contactNo}</span>
        </div>
        <div className="flex flex-row items-center justify-start my-3">
          <FiAtSign size={20} color="#00ACB1" />
          &nbsp;<span className="text-gray-400">{email}</span>
        </div>
        <div className="flex flex-row items-center justify-start">
          <FiMapPin size={20} color="#00ACB1" />
          &nbsp;
          <span className="text-gray-400">
            {branch.slice(0, 1)}
            <span className="lowercase">{branch.slice(1)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
