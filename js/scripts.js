function Pizza (type, size) { //pizza constructor
  var price = this.price;
  
  this.type = type;
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function (topping) { //push a new topping to the toppings array
  this.toppings.push(topping);
}
