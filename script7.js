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

















class Discount{
    apply(price){
        return price;
    }
}

class MirosAnt extends Discount{
    apply(price){
        return price * 2;
    }
}

class MrAnt extends Discount{
    apply(price){
        return price * 4;
    }
}


class NewRes extends Discount{
    apply(price){
        console.log(price * 7)
    }
}