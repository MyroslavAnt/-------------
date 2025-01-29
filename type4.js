// class MyClass {
//     private field1: string;
//     private field2: number;
// import exp from "constants"
// import exp from "constants"
//     constructor(field1: string, field2: number) {
//         this.field1 = field1;
//         this.field2 = field2;
//     }
//     public printFields(): void {
//         console.log(`Field1: ${this.field1}, Field2: ${this.field2}`);
//     }
//     public static printNumbers(): void {
//         for (let i = 0; i <= 10; i++) {
//             console.log(i);
//         }
//     }
// }
// Приклад використання
// const myInstance = new MyClass("Hello", 42);
// myInstance.printFields();
// MyClass.printNumbers();
// let a:number|string 
// a = 10
// console.log(a)
// a = 'hello'
// console.log(a)
// type abc = number
// let num1:abc = 20
// console.log(num1)
// enum GroupData{
//     num1 = 2,
//     num2 = 4,
//     num3 = 6,
//     num4 = 8
// }
// console.log(GroupData.num1)
// enum DayTime{
//     Morning,
//     Evening
// };
// function welcome(dayTime: DayTime){
//     if(dayTime === DayTime.Morning){
//         console.log('Good morning');
// }
// else{
//     console.log('Good evening');
// }
// }
// let current: DayTime = DayTime.Morning;
// welcome(current);
// welcome(DayTime.Evening);
// namespace MyMirosPro{
//     export let name:string = 'Miros'
//     export let name2:string = 'Miros2'
//     export function get(){
//         console.log('TypeScript')
//     }
// }
// console.log(MyMirosPro.name, MyMirosPro.name2)
// MyMirosPro.get()
// namespace MirosAnt{
//     export let a:number = 1
//     export let b:number = 2
//     export namespace A{
//         export let m:number = 33
//     }
//     export namespace B{
//         export let n:number = 44
//     }
// }
// console.log(MirosAnt.a, MirosAnt.b)
// console.log(MirosAnt.A.m)
// console.log(MirosAnt.B.n)
// let a = (b, c)=> console.log(b, c)
// a(1, 3)
// //Створити стрілочну функцію яка перебирає числа від 10 до 21
// let a = ()=> {
//     for(let i: number = 10; i <= 21; i++){
//         console.log(i)
//     }
// }
// a()
// //Створити пространство в якому функція звичайна приймає 3 параметра і складає їх Через пространство викликати функцію
// namespace MySpace{
//     export function sum(a:number, b:number, c:number){
//         console.log(a + b + c)
//     }
// }
// MySpace.sum(1, 2, 3)
//Створити пространство Створити стрілочну функцію яка приймає параметр строку. Функція виводить тип строки, длину та першу літеру
var MySpace;
(function (MySpace) {
    MySpace.a = function (str1) {
        console.log(typeof str1);
        console.log(str1.length);
        console.log(str1[0]);
    };
})(MySpace || (MySpace = {}));
MySpace.a('Hello');
