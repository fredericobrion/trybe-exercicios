export default class Person {
  protected MINIMUM_NAME_LENGTH = 3;

  protected MAXIMUM_AGES = 120;

  constructor(
    private _name: string,
    private _birthDate: Date,
  ) {
    this.validatePerson();
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime())
    const yearMs = 1000 * 60 * 60 * 24 * 365;
    return Math.floor(diff / yearMs);
  }

  private validateName(name: string): void {
    if (name.length < this.MINIMUM_NAME_LENGTH) {
      throw new Error(`O nome deve ter no mínimo ${this.MINIMUM_NAME_LENGTH} caracteres`);
    }
  }

  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser maior que a data atual');
    }
    if (Person.getAge(date) > this.MAXIMUM_AGES) {
      throw new Error(`A idade máxima permitida é ${this.MAXIMUM_AGES} anos`);
    }
  }

  private validatePerson(): void {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }
}