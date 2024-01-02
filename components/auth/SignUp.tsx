"use client";

import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { storeUserInfo } from "@/services/authService";
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useSignUpMutation } from "@/redux/api/authApi";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control, reset } = form;
  const { push } = useRouter();
  const { toast } = useToast();

  const [signUp, { isLoading: signUpIsLoading }] = useSignUpMutation();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await signUp({ ...data }).unwrap();

      if (res?.data?.accessToken) push("/profile");

      storeUserInfo({ accessToken: res?.data?.accessToken as string });
    } catch (err: any) {
      console.log("Error From Sign Up On Submit -->", err);

      toast({
        variant: "destructive",
        title: err?.data?.message || "Uh oh! Something went wrong.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      reset();
    }
  };

  if (signUpIsLoading) return <h1>Loading...</h1>;

  return (
    <Form {...form}>
      <h3 className="text-2xl font-bold">Sing Up</h3>
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
                  <Input {...field} type="text" placeholder="Your Name" />
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
        <FormField
          control={control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input {...field} type="password" placeholder="Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" disabled={signUpIsLoading} className="w-full">
          Sing Up
        </Button>
      </form>
    </Form>
  );
};

export default SignUp;
