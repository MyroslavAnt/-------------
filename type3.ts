// class Objects<T,N>{
//     public age:T
//     public numbers:N
// }

// let a = new Objects<number,number>()
// a.age = 22
// a.numbers = 99

// console.log(a.age,a.numbers)














// let a:number = 12

// if(a == 10 || a == 11 || a == 12){
//     console.log('+')
// }
// else{
//     console.log('-')
// }









// class ABC{
//     static num:number = 14
//     static get(){
//         console.log('Hello')
//     }
// }

// console.log(ABC.num)
// ABC.get()














// class Person{
//     private age:number = 20
//     get getData(){
//         return this.age
//     }

//     set getData(newAge:number){
//         if(newAge > 18){
//             this.age = newAge
//         }
//         else{
//             console.log('Small age')
//         }
//     }
// }

// let a = new Person()

// console.log(a.getData)

// a.getData = 10

// console.log(a.getData)


















// //Створити клас в якому буде статичний метод буде приймати 1 параметр число. Метод буде перевіряти чи парне число чи ні
// class Miros{
//     static num1(MrAnt:number){
//         if(MrAnt % 2 == 0){
//             console.log('парне');
//         }
//         else{
//             console.log('Не парне')
//         }
//     }
// }

// Miros.num1(7)



















// //Створити клас в якому приватне поле імя Створити властивість яка буде повертати приватне поле Створити звичайний метод який буде виводити длину строки
// class RomanPlus {
//     private RomanMega: string = "RomanPro";

//     get getRomanPremium() {
//         return this.RomanMega;
//     }

//     // Метод для вывода длины строки
//     public printLength() {
//         console.log(this.RomanMega.length);
//     }
// }

// // Пример использования
// const romanPlus = new RomanPlus();
// romanPlus.printLength(); // Выведет длину строки "RomanPro"



















