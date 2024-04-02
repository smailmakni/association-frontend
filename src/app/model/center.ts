import { Adress } from "./adress";
import { Agency } from "./agency";
import { Room } from "./room";

export interface Center {
    id:number;
    nom:string;
    numTel:string;
    adresse:Adress;
    agency:Agency;
    rooms:Room[];
}
