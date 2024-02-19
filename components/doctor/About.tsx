import { TabsContent } from "@/components/ui/tabs";

const About = ({ about }: { about: string }) => {
  return <TabsContent value="about">{about}</TabsContent>;
};

export default About;
