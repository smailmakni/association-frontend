import { Document } from "./document";
import { Equipment } from "./equipment";

export interface Intervention {
    id:number;
    type:string;
    equipment:Equipment;
    document:Document[];
}
