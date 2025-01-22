export class Address{
    constructor(private city:string, private state:string){}
    getAddress():string {
        return `${this.city}, ${this.state}`
    }
} 