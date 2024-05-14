import React from "react";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Select, { StylesConfig } from "react-select";
import { IInput } from "@/interfaces";

const styles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "hsl(var(--background))",
    borderColor: "hsl(var(--input))",
    borderRadius: "var(--radius)",
    padding: "0.1rem 0",
    fontSize: "0.875rem",
    color: "hsl(var(--foreground))",
  }),
  input: (styles) => ({
    ...styles,
    color: "hsl(var(--foreground))",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "hsl(var(--foreground))",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "0.875rem",
    color: "hsl(var(--muted-foreground))",
  }),
  option: (styles) => {
    return {
      ...styles,
      fontSize: "0.875rem",
      color: "black",
    };
  },
};

const ComboboxInput = ({
  control,
  name,
  label,
  placeholder,
  options,
  help,
  required,
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
            <Select
              options={options}
              styles={styles}
              placeholder={placeholder}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary: "hsl(var(--primary))",
                },
              })}
              // @ts-ignore
              onChange={(option) => field.onChange(option?.value)}
              onBlur={field.onBlur}
              value={options?.find((option) => option.value === field.value)}
            />
          </FormControl>

          {help && <FormDescription>{help}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ComboboxInput;
