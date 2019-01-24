
/*
============================================
var optionresponsive = false;
var optionstore = false;
var optionseo = false;
var optiongoogle = false;
var optionsocial = false;
var totalPrice = 0;
var priceType = 0;
var pricePages = 1.4;
var finalPrice = 0;
//SITE TYPE
$("#type").on("change", function() {
  var selectedType = $("#type option:selected").val();
  if (selectedType == 0) {
    priceType = 0;
  } else if (selectedType == 1) {
    priceType = 400;
  } else if (selectedType == 2) {
    priceType = 600;
  } else if (selectedType == 3) {
    priceType = 1000;
  }
  getTotal();
});
// NUMBER OF PAGES
$("#pages").on("change", function() {
  var selectedPages = $("#pages option:selected").val();
  if (selectedPages == 1) {
    pricePages = 1.4;
  } else if (selectedPages == 2) {
    pricePages = 1.5;
  } else if (selectedPages == 3) {
    pricePages = 1.6;
  } else if (selectedPages == 4) {
    pricePages = 1.7;
  } else if (selectedPages == 5) {
    pricePages = 1.8;
  } else if (selectedPages == 6) {
    pricePages = 2;
  }
  getTotal();
});
//RESPONSIVE
$("label #optionresponsive").on("click", function() {
  if (optionresponsive == false) {
    totalPrice += 100;
    optionresponsive = true;
  } else {
    totalPrice -= 100;
    optionresponsive = false;
  }
  getTotal();
});
//ONLINE STORE
$("label #optionstore").on("click", function() {
    if (optionstore == false) {
    totalPrice += 350;
    optionstore = true;
  } else {
    totalPrice -= 350;
    optionstore = false;
  }
  getTotal();
});
//SEO
$("label #optionseo").on("click", function() {
    if (optionseo == false) {
    totalPrice += 100;
    optionseo = true;
  } else {
    totalPrice -= 100;
    optionseo= false;
  }
  getTotal();
});
//GOOGLE ANALYTICS
$("label #optiongoogle").on("click", function() {
    if (optiongoogle == false) {
    totalPrice += 50;
    optiongoogle = true;
  } else {
    totalPrice -= 50;
    optiongoogle = false;
  }
  getTotal();
});
//SOCIAL MEDIA
$("label #optionsocial").on("click", function() {
    if (optionsocial == false) {
    totalPrice += 60;
    optionsocial = true;
  } else {
    totalPrice -= 60;
   optionsocial = false;
  }
  getTotal();
});

function getTotal() {
  finalPrice = ((totalPrice + priceType) * pricePages); //calculates the total price based on the options
  finalPrice = Math.round(finalPrice); //ensures that the price is a whole number
  $("#totalestimate").html("R" + finalPrice); //adds the price to the user interface
}
*/


