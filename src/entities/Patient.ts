import { User } from "./User";

export class Patient extends User{
    private medicalHistory: string[];

    constructor(id:number,name:string,email:string,medicalHistory:string[]){
        super(id,name,email);
        this.medicalHistory=medicalHistory
    }

    addMedicalHistory(record :string):void{
        this.medicalHistory.push(record)
    }
    getDetails(): string {
        return `${super.getDetails()}, Medical History: ${this.medicalHistory.join(', ')}`;
    }
}