import { toast } from "sonner";

interface SuccessToastPorps {
  title: string | "Event successful";
}

const SuccessToast = ({ title }: SuccessToastPorps) => {
  toast.success(title, {
    action: { label: "OK", onClick: () => {} },
  });
};

export default SuccessToast;
