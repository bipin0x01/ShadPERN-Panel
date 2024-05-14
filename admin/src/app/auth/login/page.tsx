"use client";

import { useSession } from "next-auth/react";
import { LoginForm } from "./login-form";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data: Session } = useSession();
  const router = useRouter();
  if (Session) {
    // redirect to dashboard if user is already logged in
    router.push("/");
  }
  return (
    <div className="h-screen w-full bg-red items-center justify-center flex flex-col bg-background">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
