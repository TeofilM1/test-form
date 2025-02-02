import { z } from "zod";
import { ERROR_LABELS } from "../utils/error-labels";


export const validationSchema = z.object({
  phoneNumber: z
    .string()
    .regex(new RegExp( /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/), {
      message: ERROR_LABELS.phoneNumberInvalid,
    }),
});

export type TValidationSchema = z.infer<typeof validationSchema>;
