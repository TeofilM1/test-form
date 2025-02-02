import { forwardRef, ForwardedRef } from "react";
import { IInput } from "./types";
import Image from "next/image";
import Exclamation from "../../assets/Exclamation.svg";

const InputComponent = (
  { type, placeholder, onInput, error, onChange, ...props }: IInput,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <>
    <input
      className=" h-14 rounded-full bg-transparent border-2 border-gray-200 pl-6 focus:outline-none focus:border-blue-600"
      {...props}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
      type={type}
      onInput={onInput}
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
export const Input = forwardRef(InputComponent);
