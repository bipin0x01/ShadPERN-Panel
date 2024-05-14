import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Switch } from "@/components/ui/switch";
import { IInput } from "@/interfaces";

const SwitchInput = ({ control, name, label, placeholder }: IInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border border-input p-3 space-x-2">
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="flex flex-col space-y-2">
            <FormLabel>{label}</FormLabel>
            <FormDescription>{placeholder}</FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
};

export default SwitchInput;
