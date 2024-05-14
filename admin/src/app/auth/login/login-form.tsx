"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ServerCrashIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PasswordInput, EmailInput } from "@/components/forms";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import Logo from "@/components/Logo";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

export function LoginForm() {
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const onFormSubmit = async (data: LoginFormValues) => {
    const { email, password } = data;

    //reset error
    setError(null);

    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    // show toast if login success
    if (response?.ok) {
      toast({
        title: "Login success",
        description:
          "You have successfully logged in! Welcome to bernhardt Entrance Portal",
      });
    }

    if (!response?.error) {
      const url = response?.url as string;

      //get callback url from url and redirect to it
      const callbackUrl = new URL(url).searchParams.get("callbackUrl");

      if (callbackUrl && callbackUrl !== "/api/auth/signin") {
        window.location.href = callbackUrl;
        return;
      }

      //change to callback url next-auth
      return router.push("/");
    }

    return setError(response.error);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onFormSubmit)}
        className="space-y-3 max-w-2xl"
      >
        <Card>
          <CardHeader className="space-y-1">
            <Logo />
            <CardTitle className="text-2xl">Login to your account</CardTitle>
            <CardDescription>
              Login to your account to continue using Tokenpilot admin
              dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {error && (
              <Alert variant="destructive">
                <ServerCrashIcon className="h-4 w-4" />
                <AlertTitle>Login failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <EmailInput
              control={form.control}
              label="Email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <PasswordInput
              control={form.control}
              label="Password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full" isLoading={form.formState.isSubmitting}>
              Login
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
