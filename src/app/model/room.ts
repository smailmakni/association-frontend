import { Center } from "./center";
import { Equipment } from "./equipment";

export interface Room {
    id:number;
    numero:string;
    activite:string;
    center:Center;
    equipment:Equipment[];
}
