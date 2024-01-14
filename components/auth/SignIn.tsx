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
import { useSignInMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/authService";
import { useRouter } from "next/navigation";
import { ErrorToast } from "../shared/toasts";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const SignIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control, reset } = form;
  const { push } = useRouter();

  const [singIn, { isLoading: signInIsLoading }] = useSignInMutation();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await singIn({ ...data }).unwrap();

      if (res?.data?.accessToken) push("/profile");

      storeUserInfo({ accessToken: res?.data?.accessToken as string });
    } catch (err: any) {
      console.log("Error From Sign In On Submit -->", err);

      ErrorToast({ title: err?.data?.message as string });
    } finally {
      reset();
    }
  };

  if (signInIsLoading) return <h1>Loading...</h1>;

  return (
    <Form {...form}>
      <h3 className="text-2xl font-bold">Sing In</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-2"
      >
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
        <Button type="submit" disabled={signInIsLoading} className="w-full">
          Sing In
        </Button>
      </form>
    </Form>
  );
};

export default SignIn;
