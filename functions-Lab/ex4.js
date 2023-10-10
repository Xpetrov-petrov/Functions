function orders(type, count){
let totalPrice = 0;

switch(type){
    case"coffee": totalPrice = count*1.50;
    break;
    case"water":totalPrice = count*1;
    break;
    case"coke":totalPrice = count*1.40;
    break;
    case"snacks":totalPrice = count*2;
    break;

}
console.log(totalPrice.toFixed(2));

}
orders("water", 5);
//orders("cofee", 2);

