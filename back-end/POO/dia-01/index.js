"use strict";
// import Client from './Client';
// import Order from './Order';
// import OrderItem from './OrderItem';
Object.defineProperty(exports, "__esModule", { value: true });
// const client = new Client('João');
// const sandwich = new OrderItem('Sanduíche Natural', 5.00);
// const juice = new OrderItem('Suco de Abacaxi', 5.00);
// const dessert = new OrderItem('Gelatina de Uva', 2.50);
// const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);
// import Person from "./Person";
// const maria = new Person('Maria', new Date('1980/01/25'));
// const joao = new Person('João', new Date('2005/10/02'));
// console.log(maria);
// console.log(joao);
var Student_1 = require("./Student");
var carolina = new Student_1.default('Carolina da Silva', new Date('2005/03/17'));
var lucas = new Student_1.default('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
var jessica = new Student_1.default('Jéssica Bianca Nunes', new Date('2004/06/06'));
var tamires = new Student_1.default('Tamires Santos Bastos', new Date('2005/11/05'));
var fernando = new Student_1.default('Fernando Gonçalves', new Date('2006/09/11'));
carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];
console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);