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
};
/*
============================================
Branding & Design Quote
============================================
*/
var optionwebsiteB = false;
var optionplanningB = false;
var optionlogoB = false;
var optiondesignB = false;
var priceTypeB = 0;
var totalPriceB = 0;
var finalPriceB = 0;
alert();
//SITE TYPE
$("#typeB").on("change", function() {
  console.log("here");
  var selectedTypeB = $("#typeB option:selected").val();
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
//Planning
$("label #optionplanningB").on("click", function() {
  if (optionplanningB == false) {
  totalPriceB += 100;
  optionplanningB = true;
} else {
  totalPriceB -= 100;
  optionplanningB = false;
}
getTotalB();
});
//LOGO
$("label #optionlogoB").on("click", function() {
  if (optionlogoB == true) {
  totalPriceB += 50;
  optionlogoB = false;
} else {
  totalPriceB -= 50;
  optionlogoB = true;
}
getTotalB();
});
//DESIGN
$("label #optiondesignB").on("click", function() {
  if (optiondesignB == true) {
  totalPriceB += 50;
  optiondesignB = false;
} else {
  totalPriceB -= 50;
  optiondesignB = true;
}
getTotalB();
});
function getTotalB() {
 finalPriceB = (totalPriceB + priceTypeB);
 finalPriceB = Math.round(finalPriceB);
 $("#totalestimateB").html("R" + finalPriceB);
};
/*
=====================================
Web Online Marketing quote
=====================================
*/
var optionseoO = true;
var optionpayperclickO = true;
var optionsocialmediamarketingO = true;
var optioncontentmarketingO = true;
var totalPriceO = 0;
var priceTypeO = 0;
var pricePagesO = 0;
var finalPriceO = 0;
//SITE TYPE
$("#type").on("change", function() {
  var selectedTypeO = $("#type option:selected").val();
  if (selectedTypeO == 0 || selectedTypeO == null) {
    priceTypeO = 0;
  } else if (selectedTypeO == 1) {
    priceTypeO = 400;
  } else if (selectedTypeO == 2) {
    priceTypeO = 600;
  } else if (selectedTypeO == 3) {
    priceTypeO = 1000;
  }
  getTotalO();
});
//SEO
$("label #optionseoO").on("click", function() {
  if (optionseoO == true) {
    totalPriceO += 100;
    optionseoO = false;
  } else {
    totalPriceO -= 100;
    optionseoO = true;
  }
  getTotalO();
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

function getTotalO() {
  console.log("FunctionO " + pricePagesO);
  finalPriceO = totalPriceO + priceTypeO + pricePagesO; //calculates the total price based on the options
  finalPriceO = Math.round(finalPriceO); //ensures that the price is a whole number
  $("#totalestimateO").html("R" + finalPriceO); //adds the price to the user interface
}
