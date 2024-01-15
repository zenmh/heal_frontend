import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useProfileRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "My Appointments",
        href: "/",
        // icon : Appoin
      },
    ],
    []
  );
};

export default useProfileRoutes;
