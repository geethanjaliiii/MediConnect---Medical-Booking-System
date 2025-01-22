import { Specialization } from "../value-objects/Specialization";
import { User } from "./User";

export class Doctor extends User {
  private specialization: Specialization;
  constructor(
    id: number,
    name: string,
    email: string,
    specialization: Specialization
  ) {
    super(id, name, email); //call constructor or methods of parent class, allowing inheriting properties without rewriting
    this.specialization = specialization;
  }
  getDetails(): string {
    {
      return `${super.getDetails()} ,Specialization:${this.specialization.getSpecialization()}`;
    }
  }
}
