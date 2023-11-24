class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(
    enrollment: string,
    name: string,
  ) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._assignmentsGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve ter no mínimo 3 caracteres');
    }
    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('O número de notas não pode ser maior que 4');
    }
    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('O número de notas não pode ser maior que 2');
    }
    this._assignmentsGrades = value;
  }

  sumGrades(): number {
    const sumExamsGrades = this._examsGrades.reduce((acc, curr) => acc + curr, 0);
    const sumAssignmentGrades = this._assignmentsGrades.reduce((acc, curr) => acc + curr, 0);

    return sumExamsGrades + sumAssignmentGrades;
  }

  averageGrades(): number {
    const sumGrades = this.sumGrades();
    const divider = this._examsGrades.length + this._assignmentsGrades.length;

    return sumGrades / divider;
  }
}