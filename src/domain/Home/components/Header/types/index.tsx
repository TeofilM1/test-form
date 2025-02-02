import { Dispatch, SetStateAction } from "react";

export interface IGetHeader {
    showOne: boolean;
    setShowOne: Dispatch<SetStateAction<boolean>>
}