export class Specialization {
    private name:string;

    constructor(name:string){
        this.name=name;
    }
    getSpecialization():string {
        return this.name
    }
}