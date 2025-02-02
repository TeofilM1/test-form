import { z } from "zod";
import { ERROR_LABELS } from "../utils/error-labels";

export const validationSchema = z.object({
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
