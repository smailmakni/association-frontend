import { Agency } from "./agency";
import { Center } from "./center";

export interface User {
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    agence:Agency;
    center:Center;
}
