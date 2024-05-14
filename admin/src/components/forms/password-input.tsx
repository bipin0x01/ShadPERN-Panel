"use client";
import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { IInput } from "@/interfaces";
import { Button } from "../ui/button";

const PasswordInput = ({
  control,
  name,
  label,
  placeholder,
  required = false,
}: IInput) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={showPassword ? "text" : "password"}
              {...field}
              rightElement={
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  size="icon"
                  variant="ghost"
                  className="w-10 h-7"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </Button>
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PasswordInput;
