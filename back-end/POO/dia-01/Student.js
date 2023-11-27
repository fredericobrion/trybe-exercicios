"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._enrollment = String();
        _this._examsGrades = [];
        _this._assignmentsGrades = [];
        _this._enrollment = _this.generateEnrollment();
        return _this;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            if (value.length < 16)
                throw new Error('A matrícula deve ter no mínimo 16 caracteres');
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () {
            return this._examsGrades;
        },
        set: function (value) {
            if (value.length > 4) {
                throw new Error('O número de notas não pode ser maior que 4');
            }
            this._examsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "assignmentsGrades", {
        get: function () {
            return this._assignmentsGrades;
        },
        set: function (value) {
            if (value.length > 2) {
                throw new Error('O número de notas não pode ser maior que 2');
            }
            this._assignmentsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.generateEnrollment = function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "STU" + randomStr;
    };
    Student.prototype.sumGrades = function () {
        var sumExamsGrades = this._examsGrades.reduce(function (acc, curr) { return acc + curr; }, 0);
        var sumAssignmentGrades = this._assignmentsGrades.reduce(function (acc, curr) { return acc + curr; }, 0);
        return sumExamsGrades + sumAssignmentGrades;
    };
    Student.prototype.averageGrades = function () {
        var sumGrades = this.sumGrades();
        var divider = this._examsGrades.length + this._assignmentsGrades.length;
        return sumGrades / divider;
    };
    return Student;
}(Person_1.default));
exports.default = Student;
