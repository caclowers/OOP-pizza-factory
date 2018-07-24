class Pizza {
    constructor(ingredients = ["cheese"]){
        this.ingredients = ingredients;
    };
};

class Order{
    constructor(newPizza){
    this.list = [];
    this.total = 0;
    };

    addToOrder(newPizza){
        this.list.push(newPizza);
    };

    calcOrderPrice(){
        for (let i = 0; i<this.list.length; i++){
            this.total += this.list[i].price;
        };
        return this.total.toFixed(2);
    };
};


class SmallPizza extends Pizza{
    constructor (ingredients = ["cheese"]){
        super(ingredients);
        this.price = 8.99 + (this.ingredients.length - 1) * 0.99;
    };
};


class MediumPizza extends Pizza{
    constructor (ingredients = ["cheese"]){
        super(ingredients);
        this.price = 10.99 + (this.ingredients.length - 1) * 0.99;
    };
};


class LargePizza extends Pizza{
    constructor (ingredients = ["cheese"]){
        super(ingredients);
        this.price = 12.99 + (this.ingredients.length - 1) * 0.99;
    };
};

let caseyPizza = new MediumPizza( ["cheese", "pepperoni"]);
let jeffPizza = new SmallPizza( ["cheese", "pepperoni", "onion"]);
let millerPizza = new LargePizza(["cheese", "bacon", "jalapeños", "onion"]);
let myOrder = new Order();

myOrder.addToOrder(millerPizza);
myOrder.addToOrder(caseyPizza);
myOrder.addToOrder(jeffPizza);
console.log('Casey', caseyPizza);
console.log('Jeff', jeffPizza);
console.log('Miller', millerPizza);

console.log(myOrder);
console.log(myOrder.calcOrderPrice());



