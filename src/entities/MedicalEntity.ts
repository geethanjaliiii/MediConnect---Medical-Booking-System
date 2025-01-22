export abstract class MedicalEntity {
  protected id: number;
  constructor(id: number) {
    this.id = id;
  }
  abstract getDetails(): string; //derived class must implemenyt this method
}
