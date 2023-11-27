"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.MINIMUM_NAME_LENGTH = 3;
        this.MAXIMUM_AGES = 120;
        this.validatePerson();
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.validateName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        enumerable: false,
        configurable: true
    });
    Person.getAge = function (date) {
        var diff = Math.abs(new Date().getTime() - date.getTime());
        var yearMs = 1000 * 60 * 60 * 24 * 365;
        return Math.floor(diff / yearMs);
    };
    Person.prototype.validateName = function (name) {
        if (name.length < this.MINIMUM_NAME_LENGTH) {
            throw new Error("O nome deve ter no m\u00EDnimo " + this.MINIMUM_NAME_LENGTH + " caracteres");
        }
    };
    Person.prototype.validateBirthDate = function (date) {
        if (date.getTime() > new Date().getTime()) {
            throw new Error('A data de nascimento não pode ser maior que a data atual');
        }
        if (Person.getAge(date) > this.MAXIMUM_AGES) {
            throw new Error("A idade m\u00E1xima permitida \u00E9 " + this.MAXIMUM_AGES + " anos");
        }
    };
    Person.prototype.validatePerson = function () {
        this.validateName(this.name);
        this.validateBirthDate(this.birthDate);
    };
    return Person;
}());
exports.default = Person;
