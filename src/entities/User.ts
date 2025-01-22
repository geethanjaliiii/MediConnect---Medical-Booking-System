import { MedicalEntity } from "./MedicalEntity";

export class User extends MedicalEntity{
    protected name:string;
    protected email:string;
    constructor(id:number,name:string,email:string){
        super(id);
        this.name=name;
        this.email=email;
    }
    getDetails(): string {
        return `ID: ${this.id}, Name:${this.name}, Email: ${this.email}`
    }
}