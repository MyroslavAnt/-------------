"use strict";
// class Person{
//     name:string = "TypeScript"
//     age:number = 11
Object.defineProperty(exports, "__esModule", { value: true });
//     print(){
//         console.log(this.name, this.age)
//     }
// }
// let a = new Person()
// console.log(a.name)
// console.log(a.age)
// a.print()
// class PersonAnt {
//     static personName: string = "MrAnt";
//     static get() {
//         console.log("world");
//     }
// }
// console.log(PersonAnt.personName);
// PersonAnt.get();
// class Person{
//     name: string
//     age: number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }
//     print(){
//         console.log(this.name, this.age)
//     }
// }
// let a = new Person("Myroslav", 30)
// a.print()
// class Person{
//     name1: string = "Vitalii"
//     name2: string = "Myroslav"
// }
// class Data extends Person{
//     print(){
//         console.log(this.name1, this.name2)
//     }
// }
// let a = new Data()
// a.print()
// class Get{
//     protected num1: number = 11
// }
// class Dataa extends Get{
//     print(){
//         console.log(this.num1)
//     }
// }
// let a = new Dataa()
// a.print()
//Створити клас в якому 2 приватних поля числа Створити метод який складає поля Створити метод який віднімає поля
var PersonANT = /** @class */ (function () {
    function PersonANT() {
        this.Ant = 39;
        this.Art = 14;
    }
    PersonANT.prototype.print = function () {
        console.log(this.Ant + this.Art);
    };
    PersonANT.prototype.printTwo = function () {
        console.log(this.Ant - this.Art);
    };
    return PersonANT;
}());
var a = new PersonANT();
a.print();
a.printTwo();
