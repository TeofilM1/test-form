
import { PhoneNumber } from "../PhoneNumber/PhoneNumber";
import { IFormInput } from "./types";
import {
  FieldValues,
  get,
  useController,
  useFormContext,
} from "react-hook-form";

export const FormPhoneInput = <T extends FieldValues>({
  name,
  ...props
}: IFormInput<T>) => {
  const { control } = useFormContext();
  const {
    field,
    formState: { errors },
  } = useController({ control, name });

  return (
    <PhoneNumber
      {...field}
      {...props}
      error={get(errors, name)?.message as string}
    />
  );
};
