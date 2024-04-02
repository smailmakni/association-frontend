import { Adress } from "./adress";
import { Center } from "./center";

export interface Agency {
    id:number;
    nom:string;
    numTel:string;
    adress:Adress;
    centers:Center[];
}
