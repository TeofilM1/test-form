import { Dispatch, SetStateAction } from "react";

export interface IGetFirst {
    setCurrent:  Dispatch<SetStateAction<number>>
    next: () => void
}