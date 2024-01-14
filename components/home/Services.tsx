import { Service } from ".";

const services = [
  {
    title: "Doctors",
    description: "Take an appointment to get the best treatment in the city.",
    href: "/doctors",
  },
  {
    title: "Medicine",
    description: "Just order to get your medicine without any hassle.",
    href: "/medicine",
  },
  {
    title: "Lab Test",
    description: "Enjoy your home service of our lab test. 30% off now.",
    href: "/lab-test",
  },
];

const Services = () => {
  return (
    <section className="my-20">
      <h3 className="text-3xl font-bold mb-4">Featured services</h3>
      <div className="flex flex-row justify-center gap-6 flex-wrap">
        {services.map(({ title, description, href }) => (
          <Service
            key={title}
            title={title}
            description={description}
            href={href}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
