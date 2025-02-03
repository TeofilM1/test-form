import { z } from "zod";
import { ERROR_LABELS } from "../utils/error-labels";

export const validationSchema = z.object({
  //validate firs and last name not to be empty and use of special characters
  firstName: z
    .string()
    .min(1, { message: ERROR_LABELS.firstNameRequired })
    .regex(new RegExp(/^[\p{Letter}\s\-.']+$/u), {
      message: ERROR_LABELS.firstNameInvalid,
    }),
  lastName: z
    .string()
    .min(1, { message: ERROR_LABELS.lastNameRequired })
    .regex(new RegExp(/^[\p{Letter}\s\-.']+$/u), {
      message: ERROR_LABELS.lastNameInvalid,
    }),
});

export type TValidationSchema = z.infer<typeof validationSchema>;
