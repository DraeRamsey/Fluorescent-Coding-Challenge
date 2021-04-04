'use strict';

$(document).ready(function() {

  let products = ["Red", "Green", "Blue"];
  let product_color = products[0].toLowerCase();
  let active_color = product_color;

  $('#' + product_color).css("display", "block");

  $('.product__color-btn').click(function() {

    let product_index = $(this).data("index");
    let active_btn = $('.product__color-btn--active');
    product_color = products[product_index].toLowerCase();

    $('#title').text(products[product_index] + " Flyknit Trainers")

    if (active_btn) {
      $(active_btn).removeClass('product__color-btn--active');
      $('#' + active_color).css("display", "none");
    }

    let new_active_btn = $(this);
    $(new_active_btn).addClass('product__color-btn--active');
    $('#' + product_color).css("display", "block");
    active_color = product_color;

  });


});
