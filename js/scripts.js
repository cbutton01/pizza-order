function Pizza (type, size) { //pizza constructor
  this.price = 0;
  this.type = type;
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function (topping) { //push a new topping to the toppings array
  this.toppings.push(topping);
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === "Large") {
    this.price += 10.00;
  } else if (this.size === "Medium") {
    this.price += 8.00;
  } else if (this.size === "Small") {
    this.price += 5.00;
  }

  for (var i = 0; i < this.toppings.length; i++) {
    this.price += .50;
  }

  return '$' + this.price.toFixed(2);

}

function RandomTime (){
  var random = Math.floor((Math.random() * 60) + 1);
  return random + ' minutes.';
}


$(document).ready(function(){
  var orderTotal = 0;

  $('#pizza-order').submit(function(event){
    event.preventDefault();
    var pizzaNow = new Pizza($('#choose-pizza').val(), $('#size').val());
    $('input:checkbox[name=toppings]:checked').each(function(){
      var addTopping = $(this).val();
      pizzaNow.addTopping(addTopping);
    });
    pizzaNow.calculatePrice();
    orderTotal += pizzaNow.price;
    $('#pizza-order').fadeOut().hide();
    $('.order-items').append('<li>' + pizzaNow.size + ' ' +  pizzaNow.type  +' Pizza '+ '<ul>With:<li>'+ pizzaNow.toppings+'</li></ul>' + 'Price: $' +'<strong>'+ pizzaNow.price.toFixed(2) + '</strong>' + '</li>')
    $('.total').text('$' + orderTotal.toFixed(2));
    $('#order').fadeIn()
    $('.shopping').click(function(event){
      event.preventDefault();
      if ($(this).val() === 'continue') {
        $('#order').fadeOut().hide();
        $('#pizza-order')[0].reset();
        $('#pizza-order').fadeIn();
      }
      if($(this).val() === 'place'){
        event.preventDefault();
        $('#order').fadeOut().hide();
        $('#time').text(RandomTime());
        $('#receipt').fadeIn();

      }
    });
  });
  });
