import { ReactNode } from "react";

const PhoneBottombar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed bottom-0 lg:hidden w-full z-40 bg-red-500 border-t-[1px]">
      {children}
    </div>
  );
};

export default PhoneBottombar;
