import Image from "next/image";
import Checked from "../../../../assets/check-circle-success.svg";
import { IGetThird } from "./types";

export const Third = ({
  setCongratulations,
  setCurrent,
}: IGetThird) => {
  // on Back to start return to first page
  const backToStart = () => {
    setCongratulations(false);
    setCurrent(0);
  };
  return (
    <div className="flex gap-2 h-screen justify-center items-center flex-col">
      <Image src={Checked} width={120} height={120} alt="Checked Icon" />
      <h2 className="font-bold text-xl">Congratulations</h2>
      <p className="font-light text-base">Welcome to your very own 25</p>
      <button className="text-blue-500 font-bold" onClick={() => backToStart()}>
        Back to start
      </button>
    </div>
  );
};
