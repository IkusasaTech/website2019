/*
============================================
Branding & Design Quote
============================================
*/
var optionwebsiteB = false;
var optionapplicationB = false;
var optiondomainB = false;
var optionemailB = false;
var optionsslB = false;
var priceTypeB = 0;
var totalPriceB = 0;
var finalPriceB = 0;
alert();
//SITE TYPE
$("#typeB").on("change", function() {
  console.log("here");
  var selectedTypeB = $("#typeH option:selected").val();
  if (selectedTypeB == 0) {
    priceTypeB = 0;
  } else if (selectedTypeB == 1) {
    priceTypeB = 400;
  } else if (selectedTypeB == 2) {
    priceTypeB = 600;
  } else if (selectedTypeB == 3) {
    priceTypeB = 1000;
  }
  getTotalB();
});
//website
$("label #optionwebsiteB").on("click", function() {
  if (optionwebsiteB == false) {
  totalPriceB += 50;
  optionwebsiteB = true;
} else {
  totalPriceB -= 50;
  optionwebsiteB = false;
}
getTotalB();
});
//Application
$("label #optionapplicationB").on("click", function() {
  if (optionapplicationB == false) {
  totalPriceB += 100;
  optionapplicationB = true;
} else {
  totalPriceB -= 100;
  optionapplicationB = false;
}
getTotalB();
});
//Domain
$("label #optiondomainB").on("click", function() {
  if (optiondomainB == false) {
  totalPriceB += 100;
  optiondomainB = true;
} else {
  totalPriceB -= 100;
  optiondomainB = false;
}
getTotalB();
});
//Email
$("label #optionemailB").on("click", function() {
  if (optionemailB == false) {
  totalPriceB += 350;
  optionemailB = true;
} else {
  totalPriceB -= 350;
  optionemailB = false;
}
getTotalB();
});
//SSL SECURITY
$("label #optionsslB").on("click", function() {
  if (optionsslB == false) {
  totalPriceB += 60;
  optionsslB = true;
} else {
  totalPriceB -= 60;
  optionsslB = false;
}
getTotalH();
});
function getTotalB() {
 finalPriceB = (totalPriceB + priceTypeB);
 finalPriceB = Math.round(finalPriceB);
 $("#totalestimateB").html("R" + finalPriceB);
};