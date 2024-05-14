import React from "react";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { IInput } from "@/interfaces";

const NumberInput = ({
  control,
  name,
  label,
  placeholder,
  required,
  help,
}: IInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type="number"
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          </FormControl>
          <FormMessage />

          {help && <FormDescription>{help}</FormDescription>}
        </FormItem>
      )}
    />
  );
};

export default NumberInput;
