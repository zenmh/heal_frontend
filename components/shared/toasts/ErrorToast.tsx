import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";

interface ErrorToastProps {
  title: string | "Uh oh! Something went wrong";
}

const ErrorToast = ({ title }: ErrorToastProps) => {
  toast({
    variant: "destructive",
    title,
    action: <ToastAction altText="Try again">Try again</ToastAction>,
  });
};

export default ErrorToast;
