//CLASS ASSIGNMENT
class Product{
    name:string
    price:number

    constructor(n:string,p:number){
        this.name=n
        this.price=p
    }
}
//BOOKS
class Books extends Product{
    Author!:string
    publishYear!:number

    constructor(n:string,p:number,a:string,py:number){
        super(n,p)
        this.Author=a
        this.publishYear=py
       
    }
    display(){
        console.log(`This Book name ${this.name} price is ${this.price} and its author name is
             ${this.Author} and published on ${this.publishYear}`);
        
    }
}
let book1 = new Books("Bang e dara", 200, "Allama Iqbal", 1924)
let book2 = new Books("Peer e kamil",500, "Umera Ahmed",2004)
console.log("BOOKS DISPLAYING....");

book1.display();
book2.display();
//FRUITS
class Fruits extends Product{
    Weight!:string

    constructor(n:string,p:number,w:string){
        super(n,p)
        this.Weight=w
    }

    Bill(){
        console.log(`Item: ${this.name}, Price: ${this.price}, Weight: ${this.Weight}`);
    }
}

let mango = new Fruits("Mangoes", 350, "1kg")
let apples = new Fruits("Apples", 220, "2kg")
console.log("FRUITS DISPLAYING...");

mango.Bill();
apples.Bill();

//DRESSES
class Dresses extends Product{
    type:string
    color!:string

    constructor(n:string,p:number,t:string,color:string){
        super(n,p)
        this.type=t
        this.color=color
    }
    billing(){
        console.log(`Dress: ${this.name}, Price: ${this.price}, Color: ${this.color}, Type: ${this.type} `);
        
    }
}

let dress1 = new Dresses("Kurti", 3000, "Black", "two piece")
let dress2 = new Dresses("Maxi", 5000, "Red", "one piece" )
console.log("DRESS DISPLAYING....");

dress1.billing();
dress2.billing();