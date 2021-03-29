'use strict';

$(document).ready(function() {


  let products = ["Red", "Green", "Blue"];



  $('.product__color-btn').click(function() {

    let product_index = $(this).data("index");

    $('#title').text(products[product_index] + " Flyknit Trainers")
    const active = $('.product__color-btn--active');

    if (active) {
      $(active).removeClass('product__color-btn--active');
    }

    const new_active = $(this);
    $(new_active).addClass('product__color-btn--active');

  });




});
