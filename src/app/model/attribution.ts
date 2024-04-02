import { Document } from "./document";
import { Equipment } from "./equipment";

export interface Attribution {
    id:number;
    nomOrganisme:string;
    type:string;
    document:Document;
    equipment:Equipment;

}
