import { FC } from "react";
import { TabsContent } from "../ui/tabs";

interface LocationAndContactProps {
  branch: string;
  contactNo: string;
}

const LocationAndContact: FC<LocationAndContactProps> = ({
  branch,
  contactNo,
}) => {
  return (
    <TabsContent value="location_and_contact">
      <p>
        <span className="font-semibold">Branch:</span>&nbsp;
        {branch.slice(0, 1)}
        <span className="lowercase">{branch.slice(1)}</span>
      </p>
      <p>
        <span className="font-semibold">Contact:</span>&nbsp; +880&nbsp;1
        {contactNo}
      </p>
    </TabsContent>
  );
};

export default LocationAndContact;
