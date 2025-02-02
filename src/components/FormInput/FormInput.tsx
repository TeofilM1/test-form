
import { Input } from "../Input/Input";
import { IFormInput } from "./types";
import {
  FieldValues,
  get,
  useController,
  useFormContext,
} from "react-hook-form";

export const FormInput = <T extends FieldValues>({
  name,
  ...props
}: IFormInput<T>) => {
  const { control } = useFormContext();
  const {
    field,
    formState: { errors, isSubmitted },
  } = useController({ control, name });

  return (
    <Input
      {...field}
      {...props}
      error={get(errors, name)?.message as string}
      isSubmitted={isSubmitted} 
    />
  );
};
