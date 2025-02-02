import { Dispatch, SetStateAction } from "react";

export interface IGetFirst {
    setShowOne:  Dispatch<SetStateAction<boolean>>
    next: () => void
}