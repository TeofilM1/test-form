import { Dispatch, SetStateAction } from "react";

export interface IGetModal {
  name: string;
  setModal: Dispatch<SetStateAction<boolean>>;
}
