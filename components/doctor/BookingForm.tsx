import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { slots } from "@/constants/appointment";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { Input } from "../ui/input";
import { FC } from "react";
import { useBookAnAppointmentMutation } from "@/redux/api/appointmentApi";
import { ErrorToast, SuccessToast } from "../shared/toasts";

interface BookingFormProps {
  doctorId: string;
}

const formSchema = z.object({
  date: z.date({
    required_error: "Booking date is required!!",
  }),
  slot: z.string({
    required_error: "Please select a slot!!",
  }),
  name: z.string({ required_error: "Name is required!!" }).min(1),
  contactNo: z
    .string({ required_error: "Contact number is required!!" })
    .min(1),
  email: z.string({ required_error: "Email is required!!" }).min(6),
});

const BookingForm: FC<BookingFormProps> = ({ doctorId }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactNo: "",
      email: "",
    },
  });
  const { control, handleSubmit, setValue } = form;
  const [bookAnAppointment, { isLoading }] = useBookAnAppointmentMutation();

  const onSubmit = async ({ date, ...others }: z.infer<typeof formSchema>) => {
    try {
      const data = {
        date: format(date, "PP"),
        doctorId,
        ...others,
      };

      const res = await bookAnAppointment(data).unwrap();

      SuccessToast({ title: res?.message as string });
    } catch (err: any) {
      console.log("Error From Appointment Booking On Submit -->", err);

      ErrorToast({ title: err?.data?.message as string });
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-2">
        <h3 className="text-2xl font-semibold">Booking Summary</h3>
        <FormField
          control={control}
          name="date"
          render={({ field: { value, onChange } }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !value && "text-muted-foreground"
                      )}
                    >
                      {value
                        ? format(value, "PP")
                        : "Pick The Appointment Date"}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="slot"
          render={({ field: { value } }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !value && "text-muted-foreground"
                      )}
                    >
                      {value
                        ? slots.find((slot) => slot === value)
                        : "Select A Slot"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search slot..." />
                    <CommandEmpty>No slot found.</CommandEmpty>
                    <CommandGroup>
                      {slots.map((slot) => (
                        <CommandItem
                          value={slot}
                          key={slot}
                          onSelect={() => {
                            setValue("slot", slot);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              slot === value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {slot}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input {...field} type="text" placeholder="Your Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={control}
          name="contactNo"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input {...field} type="text" placeholder="Contact Number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input {...field} type="email" placeholder="Enter Email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          Book An Appointment
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
