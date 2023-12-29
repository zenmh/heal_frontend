import { SignIn, SignUp } from "@/components/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <Tabs defaultValue="signup" className="w-[400px] border-2">
        <TabsList>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="signin">Sign In</TabsTrigger>
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
