import { Attribution } from "./attribution";
import { Equipment } from "./equipment";
import { Intervention } from "./intervention";

export interface Document {
    id:number;
    nom:string;
    url:string;
    equipment:Equipment;
    attribution:Attribution;
    intervention:Intervention;
}
