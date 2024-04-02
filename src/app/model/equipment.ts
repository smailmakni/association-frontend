import { Attribution } from "./attribution";
import { Document } from "./document";
import { Intervention } from "./intervention";
import { Room } from "./room";

export interface Equipment {
    id:number;
    type:string;
    nom:string;
    description:string;
    energie:string;
    matiereFabrication:string;
    etat:string;
    domaineUtilisation:string;
    provenance:string;
    document:Document[];
    room:Room;
    intervention:Intervention[];
    attribution:Attribution;
}
