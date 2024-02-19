"use client";

import { ZCreateDoctor } from "@/schema/doctor";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddADoctorPage = () => {
  const form = useForm<z.infer<typeof ZCreateDoctor>>({
    resolver: zodResolver(ZCreateDoctor),
    defaultValues: {},
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (data: z.infer<typeof ZCreateDoctor>) => {
    try {
      console.log(data);
    } catch (err) {
      console.log("Error From Add A Doctor On Submin --> ", err);
    }
  };

  return (
    <section>
      <Form {...form}>
        <h3 className="text-2xl font-bold">Add a doctor</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 mt-2"
        >
          <FormField
            control={control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Doctor name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button type="submit" className="w-full">
            Sing Up
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default AddADoctorPage;
