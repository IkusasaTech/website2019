/*
=====================================
Web development quote
=====================================
*/
var optionresponsive = true;
var optionstore = true;
var optionseo = true;
var optiongoogle = true;
var optionsocial = true;
var totalPrice = 0;
var priceType = 0;
var pricePages = 0;
var finalPrice = 0;
//SITE TYPE
$("#type").on("change", function() {
  var selectedType = $("#type option:selected").val();
  if (selectedType == 0 || selectedType == null) {
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
  if (selectedPages == 0) {
    pricePages = 100;
  } else if (selectedPages == 1) {
    pricePages = 200;
  } else if (selectedPages == 2) {
    pricePages = 300 ;
  } else if (selectedPages == 3) {
    pricePages = 400;
  } else if (selectedPages == 4) {
    pricePages = 500;
  } else if (selectedPages == 5) {
    pricePages = 600;
  }
  getTotal();
});
//RESPONSIVE
$("label #optionresponsive").on("click", function() {
  if (optionresponsive == true) {
    totalPrice += 100;
    optionresponsive = false;
  } else {
    totalPrice -= 100;
    optionresponsive = true;
  }
  getTotal();
});
//ONLINE STORE
$("label #optionstore").on("click", function() {
    if (optionstore == true) {
    totalPrice += 350;
    optionstore = false;
  } else {
    totalPrice -= 350;
    optionstore = true;
  }
  getTotal();
});
//SEO
$("label #optionseo").on("click", function() {
    if (optionseo == true) {
    totalPrice += 100;
    optionseo = false;
  } else {
    totalPrice -= 100;
    optionseo= true;
  }
  getTotal();
});
//GOOGLE ANALYTICS
$("label #optiongoogle").on("click", function() {
    if (optiongoogle == true) {
    totalPrice += 50;
    optiongoogle = false;
  } else {
    totalPrice -= 50;
    optiongoogle = true;
  }
  getTotal();
});
//SOCIAL MEDIA
$("label #optionsocial").on("click", function() {
    if (optionsocial == true) {
    totalPrice += 60;
    optionsocial = false;
  } else {
    totalPrice -= 60;
    optionsocial = true;
  }
  getTotal();
});

function getTotal() {
  console.log("Function " + pricePages);
  finalPrice = totalPrice + priceType + pricePages; //calculates the total price based on the options
  finalPrice = Math.round(finalPrice); //ensures that the price is a whole number
  $("#totalestimate").html("R" + finalPrice); //adds the price to the user interface
}

/*
============================================
Hosting Quote
============================================
*/
var optionwebsiteH = false;
var optionapplicationH = false;
var optiondomainH = false;
var optionemailH = false;
var optionsslH = false;
var priceTypeH = 0;
var totalPriceH = 0;
var finalPriceH = 0;
alert();
//SITE TYPE
$("#typeH").on("change", function() {
  console.log("here");
  var selectedTypeH = $("#typeH option:selected").val();
  if (selectedTypeH == 0) {
    priceTypeH = 0;
  } else if (selectedTypeH == 1) {
    priceTypeH = 400;
  } else if (selectedTypeH == 2) {
    priceTypeH = 600;
  } else if (selectedTypeH == 3) {
    priceTypeH = 1000;
  }
  getTotalH();
});
//website
$("label #optionwebsiteH").on("click", function() {
  if (optionwebsiteH == false) {
  totalPriceH += 50;
  optionwebsiteH = true;
} else {
  totalPriceH -= 50;
  optionwebsiteH = false;
}
getTotalH();
});
//Application
$("label #optionapplicationH").on("click", function() {
  if (optionapplicationH == false) {
  totalPriceH += 100;
  optionapplicationH = true;
} else {
  totalPriceH -= 100;
  optionapplicationH = false;
}
getTotalH();
});
//Domain
$("label #optiondomainH").on("click", function() {
  if (optiondomainH == false) {
  totalPriceH += 100;
  optiondomainH = true;
} else {
  totalPriceH -= 100;
  optiondomainH = false;
}
getTotalH();
});
//Email
$("label #optionemailH").on("click", function() {
  if (optionemailH == false) {
  totalPriceH += 350;
  optionemailH = true;
} else {
  totalPriceH -= 350;
  optionemailH = false;
}
getTotalH();
});
//SSL SECURITY
$("label #optionsslH").on("click", function() {
  if (optionsslH == false) {
  totalPriceH += 60;
  optionsslH = true;
} else {
  totalPriceH -= 60;
  optionsslH = false;
}
getTotalH();
});
function getTotalH() {
 finalPriceH = (totalPriceH + priceTypeH);
 finalPriceH = Math.round(finalPriceH);
 $("#totalestimateH").html("R" + finalPriceH);
}