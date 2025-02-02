import NumberIcon from "../../../../assets/Number.svg";
import NumberOne from "../../../../assets/One.svg";
import NumberTwo from "../../../../assets/Two.svg";
import Image from "next/image";
import { IGetHeader } from "./types";

export const Header = ({ showOne, setShowOne }: IGetHeader) => {
  return (
    <div>
      <div className="h-32 flex justify-center items-center pt-14 pb-3">
        {!showOne && (
          <button onClick={() => setShowOne(true)} className="justify-start">
            back
          </button>
        )}
        <Image src={NumberIcon} width={57} height={56} alt="Number Icon" />
      </div>
      <div className="flex justify-center items-center gap-2 p-2">
        <Image src={NumberOne} width={33} height={32} alt="Number One" />
        <div className="w-1 h-1 bg-gray-300 rounded-3xl"></div>
        <Image src={NumberTwo} width={33} height={32} alt="Number Two" />
      </div>
    </div>
  );
};
