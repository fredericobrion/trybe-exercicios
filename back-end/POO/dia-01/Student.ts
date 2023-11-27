import Person from "./Person";

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(
    name: string,
    birthDate: Date,
  ) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve ter no mínimo 16 caracteres');

    this._enrollment = value;
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

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
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