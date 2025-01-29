// class Order{
//     constructor(items){
//         this.items = items;
//     }

//     calculateTotal(){
//         return this.items * 2
//     }

//     saveToDatabase(){
//         console.log("Saving order to database...");
//     }
// }

















// class Discount{
//     apply(price){
//         return price;
//     }
// }

// class MirosAnt extends Discount{
//     apply(price){
//         return price * 2;
//     }
// }

// class MrAnt extends Discount{
//     apply(price){
//         return price * 4;
//     }
// }


// class NewRes extends Discount{
//     apply(price){
//         console.log(price * 7)
//     }
// }



















// class SQLDatabase{
//     connect(){
//         console.log("Connecting to SQL Database...");
//     }
// }

// class Application{
//     constructor(){
//         this.database = new SQLDatabase();
//     }
    
//     run(){
//         this.database.connect();
//     }
// }










// class Database{
//     connect(){}
// }

// class SQLDatabase extends Database {
//     connect(){
//         console.log('Connecting to SQL Database...')
//     }
// }

// class Application{
//     constructor(database){
//         this.database = database;
//     }
    
//     run(){
//         this.database.connect();
//     }
// }

// const db = new SQLDatabase();
// const app = new Application(db);
// app.run;






















// //Є базовий клас в якому оголошений пустий метод Створити клас клас наслідник в якому 2 приватних поля які будуть виводитися в переопридільоному методі Створити клас наслідник в якому переопридільоний метод буде виводити повідомлення Hello world
// class Sonic{
//     print(){}
// }

// class Miros extends Sonic{
//     #name = "Myroslav Shulha"
//     #age = 14
//     print(){
//         console.log(this.#name, this.#age)
//     }
// }

// class Welcome extends Sonic{
//     print(){
//         console.log('Hello World')
//     }
// }


// let a = new Miros()
// a.print()
// let b = new Welcome()
// b.print()












