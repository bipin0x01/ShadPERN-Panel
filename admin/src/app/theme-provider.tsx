"use client";

import * as React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { toast } = useToast();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
      mutations: {
        onError: (error) => {
          //@ts-ignore
          if (error?.response?.data?.message) {
            toast({
              variant: "destructive",
              //@ts-ignore
              title: error?.response?.data?.message || "",
            });

            return;
          }

          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            //@ts-ignore
            description:
              "There was a problem with your request. Please try again.",
          });
        },
      },
    },
  });

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider defaultTheme="light" {...props}>
          {children}
        </NextThemesProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
