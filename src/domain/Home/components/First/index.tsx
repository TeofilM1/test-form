import { FormProvider, useForm } from "react-hook-form";
import {
  TValidationSchema,
  validationSchema,
} from "./validation/validation-schema";
import { formResolver } from "@/resolvers/formResolver";
import { FormInput } from "@/components/FormInput/FormInput";
import { LABELS } from "./utils/labels";
// import { useCallback, useState } from "react";
import { IGetMain } from "./types";

export const First = ({ setShowOne }: IGetMain) => {
  // const [data, setData] = useState({
  //   firstName: "",
  //   lastName: "",
  // });
  const methods = useForm<TValidationSchema>({
    resolver: formResolver(validationSchema),
    mode:'all',
    // defaultValues: {
    //   firstName: "",
    //   lastName: "",
    // },
  });
  console.log(methods.getValues());

  const onSubmit = (submitData: TValidationSchema) => {
    console.log(submitData);


    setShowOne(false);
    methods.setValue('firstName', submitData.firstName);
    methods.setValue('lastName', submitData.lastName);
  };

  return (
    <div className="p-6 gap-6 flex flex-col">
      <h4 className="font-bold ">{LABELS.introductions}</h4>
      <FormProvider {...methods}>
        <form className=" flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-light text-gray-500">
              {LABELS.firstName}
            </label>
            <FormInput
              name="firstName"
              type="text"
              placeholder="Your first name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-light text-gray-500">
              {LABELS.lastName}
            </label>
            <FormInput
              name="lastName"
              type="text"
              placeholder="Your last name"
            />
          </div>
          <button
            type="submit"
            onClick={methods.handleSubmit(onSubmit)}
            className="h-14 w-full bg-blue-500 text-white rounded-full"
          >
            {LABELS.continue}
          </button>
        </form>
      </FormProvider>
      <button className="text-blue-500 font-bold">{LABELS.haveAccount}</button>
    </div>
  );
};
