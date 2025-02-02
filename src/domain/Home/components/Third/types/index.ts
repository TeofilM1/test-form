import { Dispatch, SetStateAction } from "react";

export interface IGetThird {
    setCongratulations: Dispatch<SetStateAction<boolean>>
    setShowOne: Dispatch<SetStateAction<boolean>>
    setCurrent: Dispatch<SetStateAction<number>>
}