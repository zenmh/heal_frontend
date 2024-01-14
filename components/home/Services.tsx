import { Service } from ".";

const services = [
  { title: "1", description: "" },
  { title: "2", description: "" },
  { title: "3", description: "" },
];

const Services = () => {
  return (
    <section>
      <div>
        {services.map(({ title, description }) => (
          <Service key={title} />
        ))}
      </div>
    </section>
  );
};

export default Services;
