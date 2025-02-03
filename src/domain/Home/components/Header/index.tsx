import NumberIcon from "../../../../assets/Number.svg";
import NumberOne from "../../../../assets/One.svg";
import NumberTwo from "../../../../assets/Two.svg";
import Image from "next/image";
import { IGetHeader } from "./types";
import Back from "../../../../assets/LeftArrow.svg";

export const Header = ({ previous, current }: IGetHeader) => {
  const onBack = () => {
    previous();
  };
  return (
    <div className={`${current === 1 && "-mt-[24]"}`}>
      {/* if second page show button to go back*/}
      {current === 1 && (
        <button onClick={() => onBack()} className="relative top-[95] left-6">
          <Image src={Back} width={14} height={14} alt="Left Arrow" />
        </button>
      )}
         {/* -----------------------------------*/}
      <div className="h-32 flex justify-center items-center pt-14 pb-3 px-6">
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
