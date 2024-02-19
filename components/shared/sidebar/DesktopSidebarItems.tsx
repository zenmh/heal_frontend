import { motion } from "framer-motion";
import { useState } from "react";
import { TDesktopSidebarItem } from "@/types/sidebar";
import { useRouter } from "next/navigation";

const DesktopSidebarItems = ({ items }: { items: TDesktopSidebarItem[] }) => {
  const { push } = useRouter();
  let [activeTab, setActiveTab] = useState(items[0].href);

  const onClick = (href: string) => {
    setActiveTab(href);
    push(href);
  };

  return (
    <div className="flex flex-col space-x-1">
      {items.map(({ label, href }) => (
        <button
          key={href}
          onClick={() => onClick(href)}
          className={`${
            activeTab === href ? "" : "hover:text-primary"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {activeTab === href && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-primary mix-blend-darken"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {label}
        </button>
      ))}
    </div>
  );
};

export default DesktopSidebarItems;
