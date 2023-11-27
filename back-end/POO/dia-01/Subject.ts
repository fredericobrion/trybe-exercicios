export default class Subject {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}