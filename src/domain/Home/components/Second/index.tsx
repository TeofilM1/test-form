import { formResolver } from "@/resolvers/formResolver";
import { FormProvider, useForm } from "react-hook-form";
import {
  TValidationSchema,
  validationSchema,
} from "./validation/validation-schema";
import { LABELS } from "../First/utils/labels";
import { useState } from "react";
import { Modal } from "../Modal";
import { IGetSecond } from "./types";
import { FormPhoneInput } from "@/components/FormPhoneNumber/FormPhoneNumber";

export const Second = ({ setCongratulations }: IGetSecond) => {
  //state for name and modal for terms and conditions
  const [openModal, setModal] = useState(false);
  const [name, setName] = useState("");
  // state for phone input
  const [phone, setPhone] = useState("");
   // react-hook-form for fields validation
  const methods = useForm<TValidationSchema>({
    resolver: formResolver(validationSchema),
  });
  //open modal and set terms or conditions
  const handleModal = (name: string) => {
    setName(name);
    setModal(true);
  };

  const changePhone = (phone: string) => {
    setPhone(phone);
    methods.setValue("phoneNumber", phone);
  };

  const onSubmit = (submitData: TValidationSchema) => {
      // on submit if need send data to server if not go to last page
    console.log(submitData);
    setCongratulations(true);
  };

  return (
    <div className="p-6 gap-6 flex flex-col">
      <h4 className="font-bold ">{LABELS.validate}</h4>
      <FormProvider {...methods}>
        <form className=" flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-light text-gray-500">
              {LABELS.phoneNumber}
            </label>
            <FormPhoneInput
              name="phoneNumber"
              value={phone}
              onChange={(phone) => changePhone(phone)}
            />
          </div>
        </form>
      </FormProvider>
      <p className="text-xs font-light text-gray-500">
        By clicking ‘Continue’ you confirm that you agree to our
        <button
          className="text-blue-600 font-bold"
          onClick={() => handleModal("Terms & conditions")}
        >
          terms and conditions
        </button>{" "}
        and{" "}
        <button
          className="text-blue-600 font-bold"
          onClick={() => handleModal("Privacy policy")}
        >
          {" "}
          privacy policy
        </button>
      </p>
      <button
        type="submit"
        onClick={methods.handleSubmit(onSubmit)}
        className="h-14 w-[345] bg-blue-500 text-white rounded-full"
      >
        {LABELS.continue}
      </button>

      {openModal && <Modal name={name} setModal={setModal} />}
    </div>
  );
};
