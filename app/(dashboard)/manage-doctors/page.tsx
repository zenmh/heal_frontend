import { Button } from "@/components/ui/button";
import Link from "next/link";

const ManageDoctorsPage = () => {
  return (
    <section>
      <Link href="/manage-doctors/add-a-doctor">
        <Button>+ Add A Doctor</Button>
      </Link>
    </section>
  );
};

export default ManageDoctorsPage;
