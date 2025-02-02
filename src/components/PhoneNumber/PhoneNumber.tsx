import { forwardRef, ForwardedRef } from "react";
import { IPhoneInput } from "./types";
import Image from "next/image";
import Exclamation from "../../assets/Exclamation.svg";
import { PhoneInput, PhoneInputRefType } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneInputComponent = (
  { error, onChange , value}: IPhoneInput,
  ref: ForwardedRef<PhoneInputRefType>
) => {
  return (
    <>
      <PhoneInput
        ref={ref}
        countrySelectorStyleProps={{
          buttonStyle: {
            width: "112px",
            borderRadius: "56px",
            height: "56px",
            border: "2px solid #0216261F",
            marginRight: "4px",
          },
        }}
        inputStyle={{
          width: "100%",
          borderRadius: "56px",
          height: "56px",
          border: "2px solid #0216261F",
        }}
        defaultCountry="ua"
        value={value}
        onChange={onChange}
      />
      <div>
        {error && (
          <div className="flex gap-1 items-center">
            <Image src={Exclamation} width={13} height={13} alt="Number One" />
            <p className="text-xs font-light text-red-400">{error}</p>
          </div>
        )}
      </div>
    </>
  );
};
export const PhoneNumber = forwardRef(PhoneInputComponent);
