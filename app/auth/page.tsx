import { SignIn, SignUp } from "@/components/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <Tabs defaultValue="signup" className="w-[400px]">
        <TabsList className="w-full">
          <TabsTrigger value="signup" className="w-full font-semibold">
            Sign Up
          </TabsTrigger>
          <TabsTrigger value="signin" className="w-full font-semibold">
            Sign In
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <SignUp />
        </TabsContent>
        <TabsContent value="signin">
          <SignIn />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Auth;
