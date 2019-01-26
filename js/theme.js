
"use strict";
// placeholder remove
/*---------------------------
Mega- Menu Link
------------------------------*/

/*---------------------
   Testimonial carousel
  ---------------------*/
  (function($){
    $(document).ready(function(){
      $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
      });
    });
  })(jQuery);
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  
$(function() {

  // We can attach the `fileselect` event to all file inputs on the page
  $(document).on('change', ':file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });

  // We can watch for our custom `fileselect` event like this
  $(document).ready( function() {
      $(':file').on('fileselect', function(event, numFiles, label) {

          var input = $(this).parents('.input-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;

          if( input.length ) {
              input.val(log);
          } else {
              if( log ) alert(log);
          }

      });
  });
  
});
$('#carousel').carousel({
  interval: 10000
})
$('#myCarousel').carousel({
  interval: 4000
})

$('.carousel .item').each(function () {
  var next = $(this).next();
  if (!next.length || $('#myCarousel:hover').length != 0) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < 2; i++) {
    next = next.next();
    if (!next.length || $('#myCarousel:hover').length != 0) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});
function removePlaceholder() {
  if ($("input,textarea").length) {
    $("input,textarea").each(
      function () {
        $(this).data('holder', $(this).attr('placeholder'));
        $(this).on('focusin', function () {
          $(this).attr('placeholder', '');
        });
        $(this).on('focusout', function () {
          $(this).attr('placeholder', $(this).data('holder'));
        });

      });
  }
}
$('.get-more').on('click', function () {
  $('.get-more').addClass('hide');
  $('.more-about').removeClass('hide');
});

//IBM Marketing Script Start
$('.overview-tab-ibm').on('click', function () {
  $('.outlines-ibm,.Schedules-ibm,.online-training-ibm,.Certification-ibm').addClass('hide');
  $('.overview-ibm').removeClass('hide');
});
$('.course-outline-tab-ibm').on('click', function () {
  $('.overview-ibm,.Certification-ibm,.online-training-ibm,.Schedules-ibm').addClass('hide');
  $('.outlines-ibm').removeClass('hide');
});
$('.schedule-tab-ibm').on('click', function () {
  $('.overview-ibm,.outlines-ibm,.online-training-ibm,.Certification-ibm').addClass('hide');
  $('.Schedules-ibm').removeClass('hide');
});
$('.certification-tab-ibm').on('click', function () {
  $('.overview-ibm,.outlines-ibm,.Schedules-ibm,.online-training-ibm').addClass('hide');
  $('.Certification-ibm').removeClass('hide');
});
$('.online-tab-ibm').on('click', function () {
  $('.overview-ibm,.Certification-ibm,.Schedules-ibm,.outlines-ibm').addClass('hide');
  $('.online-training-ibm').removeClass('hide');
});
//IBM Marketing Script End
//Microsoft Marketing Script Start
$('.overview-tab-microsoft').on('click', function () {
  $('.outlines-microsoft,.Schedules-microsoft,.online-training-microsoft,.Certification-microsoft').addClass('hide');
  $('.overview-microsoft').removeClass('hide');
});
$('.course-outline-tab-microsoft').on('click', function () {
  $('.overview-microsoft,.Certification-microsoft,.online-training-microsoft,.Schedules-microsoft').addClass('hide');
  $('.outlines-microsoft').removeClass('hide');
});
$('.schedule-tab-microsoft').on('click', function () {
  $('.overview-microsoft,.outlines-microsoft,.online-training-microsoft,.Certification-microsoft').addClass('hide');
  $('.Schedules-microsoft').removeClass('hide');
});
$('.certification-tab-microsoft').on('click', function () {
  $('.overview-microsoft,.outlines-microsoft,.Schedules-microsoft,.online-training-microsoft').addClass('hide');
  $('.Certification-microsoft').removeClass('hide');
});
$('.online-tab-microsoft').on('click', function () {
  $('.overview-microsoft,.Certification-microsoft,.Schedules-microsoft,.outlines-microsoft').addClass('hide');
  $('.online-training-microsoft').removeClass('hide');
});
//Microsoft Marketing Script End
//Digital Marketing Script Start
$('.dmi-card').on('click', function () {
  window.location.href = "digital-marketing-training.html";
});
$('.overview-tab-dmi').on('click', function () {
  $('.outlines-dmi,.Schedules-dmi,.online-training-dmi,.Certification-dmi').addClass('hide');
  $('.overview-dmi').removeClass('hide');
});
$('.course-outline-tab-dmi').on('click', function () {
  $('.overview-dmi,.Certification-dmi,.online-training-dmi,.Schedules-dmi').addClass('hide');
  $('.outlines-dmi').removeClass('hide');
});
$('.schedule-tab-dmi').on('click', function () {
  $('.overview-dmi,.outlines-dmi,.online-training-dmi,.Certification-dmi').addClass('hide');
  $('.Schedules-dmi').removeClass('hide');
});
$('.certification-tab-dmi').on('click', function () {
  $('.overview-dmi,.outlines-dmi,.Schedules-dmi,.online-training-dmi').addClass('hide');
  $('.Certification-dmi').removeClass('hide');
});
$('.online-tab-dmi').on('click', function () {
  $('.overview-dmi,.Certification-dmi,.Schedules-dmi,.outlines-dmi').addClass('hide');
  $('.online-training-dmi').removeClass('hide');
});
//Digital Marketing Script End
//COMPTIA Marketing Script Start
$('.overview-tab-comptia').on('click', function () {
  $('.outlines-comptia,.Schedules-comptia,.online-training-comptia,.Certification-comptia').addClass('hide');
  $('.overview-comptia').removeClass('hide');
});
$('.course-outline-tab-comptia').on('click', function () {
  $('.overview-comptia,.Certification-comptia,.online-training-comptia,.Schedules-comptia').addClass('hide');
  $('.outlines-comptia').removeClass('hide');
});
$('.schedule-tab-comptia').on('click', function () {
  $('.overview-comptia,.outlines-comptia,.online-training-comptia,.Certification-comptia').addClass('hide');
  $('.Schedules-comptia').removeClass('hide');
});
$('.certification-tab-comptia').on('click', function () {
  $('.overview-comptia,.outlines-comptia,.Schedules-comptia,.online-training-comptia').addClass('hide');
  $('.Certification-comptia').removeClass('hide');
});
$('.online-tab-comptia').on('click', function () {
  $('.overview-comptia,.Certification-comptia,.Schedules-comptia,.outlines-comptia').addClass('hide');
  $('.online-training-comptia').removeClass('hide');
});
//COMPTIA Marketing Script End
//BUSINESS Marketing Script Start
$('.overview-tab-business').on('click', function () {
  $('.outlines-business,.Schedules-business,.online-training-business,.Certification-business').addClass('hide');
  $('.overview-business').removeClass('hide');
});
$('.course-outline-tab-business').on('click', function () {
  $('.overview-business,.Certification-business,.online-training-business,.Schedules-business').addClass('hide');
  $('.outlines-business').removeClass('hide');
});
$('.schedule-tab-business').on('click', function () {
  $('.overview-business,.outlines-business,.online-training-business,.Certification-business').addClass('hide');
  $('.Schedules-business').removeClass('hide');
});
$('.certification-tab-business').on('click', function () {
  $('.overview-business,.outlines-business,.Schedules-business,.online-training-business').addClass('hide');
  $('.Certification-business').removeClass('hide');
});
$('.online-tab-business').on('click', function () {
  $('.overview-business,.Certification-business,.Schedules-business,.outlines-business').addClass('hide');
  $('.online-training-business').removeClass('hide');
});
//BUSINESS Marketing Script End
//Project Script Start
$('.project-card').on('click', function () {
  window.location.href = "ProjectManagement.html";
});
$('.overview-tab-project').on('click', function () {
  $('.outlines-project,.Schedules-project,.online-training-project,.Certification-project').addClass('hide');
  $('.overview-project').removeClass('hide');
});
$('.course-outline-tab-project').on('click', function () {
  $('.overview-project,.Certification-project,.online-training-project,.Schedules-project').addClass('hide');
  $('.outlines-project').removeClass('hide');
});
$('.schedule-tab-project').on('click', function () {
  $('.overview-project,.outlines-project,.online-training-project,.Certification-project').addClass('hide');
  $('.Schedules-project').removeClass('hide');
});
$('.certification-tab-project').on('click', function () {
  $('.overview-project,.outlines-project,.Schedules-project,.online-training-project').addClass('hide');
  $('.Certification-project').removeClass('hide');
});
$('.online-tab-project').on('click', function () {
  $('.overview-project,.Certification-project,.Schedules-project,.outlines-project').addClass('hide');
  $('.online-training-project').removeClass('hide');
});
//Project Script End




//Modal header changing
$('.branding-quote').on('click', function () {
  localStorage.setItem("head", "Branding quotation");
});
$('.website-quote').on('click', function () {
  localStorage.setItem("head", "Website Quotation");
});
$('.online-qoute').on('click', function () {
  localStorage.setItem("head", "Online Marketing Quotation");
});
$('.hosting-quote').on('click', function () {
  localStorage.setItem("head", "Hosting Quotation");
});
$('.support-quote').on('click', function () {
  localStorage.setItem("head", "Support and Maintenance Quotation");
});
$('.audit-quote').on('click', function () {
  localStorage.setItem("head", "IT Audit Quotation");
});
$('.crm-quote').on('click', function () {
  localStorage.setItem("head", "Customer Relationship Management Quotation");
});
$('.lms-quote').on('click', function () {
  localStorage.setItem("head", "Learning Management System Quotation");
});
$('.intranet-quote').on('click', function () {
  localStorage.setItem("head", "Intranet Quotation");
});
$('.buy-basic').on('click', function () {
  localStorage.setItem("head", "BUY BASIC PACKAGE");
});
$('.buy-advance').on('click', function () {
  localStorage.setItem("head", "BUY ADVANCE PACKAGE'");
});
$('.buy-premium').on('click', function () {
  localStorage.setItem("head", "BUY PREMIUM PACKAGE");
});
$('.need-design').on('click', function () {
  localStorage.setItem("head", "Branding and Design");
});
$('.website').on('click', function () {
  localStorage.setItem("head", "Website");
});
$('.online').on('click', function () {
  localStorage.setItem("head", "Online Marketing");
});
$('.hosting').on('click', function () {
  localStorage.setItem("head", "Hosting");
});
$('.support').on('click', function () {
  localStorage.setItem("head", "Support and Maintainance");
});
$('.audit').on('click', function () {
  localStorage.setItem("head", "IT AUDIT");
});
$('.comp-private').on('click', function () {
  localStorage.setItem("head", "Register Private Company");
});
$('.comp-npo').on('click', function () {
  localStorage.setItem("head", "Register NPO");
});
$('.comp-personal').on('click', function () {
  localStorage.setItem("head", "Personal Liability Company");
});
$('.comp-reserve').on('click', function () {
  localStorage.setItem("head", "Company Name Reserve");
});
$('.comp-restoration').on('click', function () {
  localStorage.setItem("head", "Company Restoration");
});
$('.comp-dereg').on('click', function () {
  localStorage.setItem("head", "Company Deregistration");
});
$('.comp-ann').on('click', function () {
  localStorage.setItem("head", "Annual Return");
});
$('.comp-paye').on('click', function () {
  localStorage.setItem("head", "Paye Registration");
});
$('.comp-bee').on('click', function () {
  localStorage.setItem("head", "Company BEE");
});
$('.comp-vat').on('click', function () {
  localStorage.setItem("head", "Company VAT");
});
$('.comp-tax').on('click', function () {
  localStorage.setItem("head", "Company TAX");
});
$('.comp-share').on('click', function () {
  localStorage.setItem("head", "Company Shareholder");
});
$('.comp-trust').on('click', function () {
  localStorage.setItem("head", "Company Trust and Wills");
});
$('.request').on('click', function () {
  //alertalert($(this).closest('p').find('.course').text());
});
$('.more-extraxt').on('click', function () {
  $('.more-blog').removeClass('hide');
  $('.more-extraxt,.dot').addClass('hide');
});
$('.more-extraxt1').on('click', function () {
  $('.more-blog1').removeClass('hide');
  $('.more-extraxt1,.dot1').addClass('hide');
});
$('.more-extraxt2').on('click', function () {
  $('.more-blog2').removeClass('hide');
  $('.more-extraxt2,.dot2').addClass('hide');
});
$('.m-back').on('click', function () {
  window.location.href = 'contact.html#send-msg';
});

// Scroll to top
function scrollToTop() {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

    //Click event to scroll to top
    $('.scroll-top').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 1500);
      return false;
    });
  }
}


// Theme-banner Video slider 
function BannerVideoSlider() {
  var banner = $("#main-banner-slider.video-slider");
  if (banner.length) {
    banner.revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      loops: false,
      delay: 10000,
      navigation: {
        arrows: {
          style: "hermes",
          enable: true,
          hide_onmobile: false,
          hide_onleave: false,
          tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 0,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 0,
            v_offset: 0
          }
        },
        bullets: {
          enable: false,
        }

      },
      responsiveLevels: [2220, 1183, 975, 751],
      gridwidth: [1170, 970, 770, 350],
      gridheight: [850, 850, 850, 700],
      shadow: 0,
      spinner: "off",
      autoHeight: "off",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        disableFocusListener: false,
      }
    });
  };
}


//Add OnepageNav / Sidebar
function onePageFixedNav() {
  if ($('body').length) {
    // Add scrollspy to 
    $('body').scrollspy({ target: ".theme-main-header", offset: 70 });

    // Add smooth scrolling on all links inside the one-page-menu
    $(".one-page-menu li a").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  }
}


// Mixitup gallery
function mixitupGallery() {
  var mixItem = $(".project-gallery");
  if (mixItem.length) {
    mixItem.mixItUp()
  };
}

// Progress Bar
function bootstrapProgress() {
  var smartskill = $('.skills');
  if (smartskill.length) {
    smartskill.skill();
  }
}


// Client SLider
function clientSlider() {
  var cSldier = $(".client-slider");
  if (cSldier.length) {
    cSldier.owlCarousel({
      animateOut: 'slideOutLeft',
      loop: true,
      nav: false,
      navText: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 7000,
      autoplaySpeed: 5500,
      lazyLoad: true,
      items: 1,
    })
  }
}


// Partner Logo Footer 
function partnersLogo() {
  var logoSlide = $("#partner_logo");
  if (logoSlide.length) {
    logoSlide.owlCarousel({
      loop: true,
      margin: -1,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplaySpeed: 1000,
      lazyLoad: true,
      singleItem: true,
      responsive: {
        0: {
          items: 1
        },
        550: {
          items: 2
        },
        751: {
          items: 3
        },
        1001: {
          items: 5
        }
      }
    })
  }
}


//Contact Form Validation
function contactFormValidation() {
  var activeForm = $('.form-validation');
  if (activeForm.length) {
    activeForm.validate({ // initialize the plugin
      rules: {
        Fname: {
          required: true
        },
        Lname: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        sub: {
          required: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function (form) {
        $(form).ajaxSubmit({
          success: function () {
            $('.form-validation :input').attr('disabled', 'disabled');
            activeForm.fadeTo("slow", 1, function () {
              $(this).find(':input').attr('disabled', 'disabled');
              $(this).find('label').css('cursor', 'default');
              $('#alert-success').fadeIn();
            });
          },
          error: function () {
            activeForm.fadeTo("slow", 1, function () {
              $('#alert-error').fadeIn();
            });
          }
        });
      }
    });
  }
}

// Close suddess Alret
function closeSuccessAlert() {
  var closeButton = $(".closeAlert");
  if (closeButton.length) {
    closeButton.on('click', function () {
      $(".alert-wrapper").fadeOut();
    });
    closeButton.on('click', function () {
      $(".alert-wrapper").fadeOut();
    })
  }
}


// Sticky header
function stickyHeader() {
  if ($('.theme-main-header').length) {
    var sticky = $('.theme-main-header'),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

  };
}

// Calendar
function cladendar() {
  var calender = $('#blog-calendar');
  if (calender.length) {
    calender.monthly();
  }
}

// Tooggle Home page menu click Function 
function subMenuExpend() {
  if ($(".theme-main-header").length) {
    $('.theme-main-header li.dropdown-holder').append(function () {
      return '<i class="fa fa-angle-down"></i>';
    });
    $('.theme-main-header li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    });
  }
}

// DOM ready function
jQuery(document).on('ready', function () {
  (function ($) {
    removePlaceholder();
    scrollToTop();
    BannerVideoSlider();
    onePageFixedNav();
    mixitupGallery();
    bootstrapProgress();
    clientSlider();
    partnersLogo();
    contactFormValidation();
    closeSuccessAlert();
    cladendar();
    subMenuExpend()
  })(jQuery);
});


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader()
  })(jQuery);
});

(function(){
  window.onload = function(){
    var centi;
    var canvas = document.getElementById('c');
      
    var NUM = 300;
    var a = [];
    var dist_mul = 3;
    
    centi = new Centi("centi");
    centi.init(canvas);
    centi.setupFunc = init;
    centi.drawFunc = draw;
    centi.mouseMove = onMouseMove;
                  centi.mouseDown = onMouseDown;
                  centi.mouseUp = onMouseUp;
    centi.start();
  
    requestAnimationFrame(update);
    
    function init(){
      centi.sz(1,1);
      centi.bg(235, 230, 200);
    }
    
    
    function draw(){
      if ( a.length < NUM ) {
        var v = centi.vec2(centi.rnd(-9,9)+centi.w/2, centi.rnd(-9,9)+centi.h/2);
        v.vx=0;
        v.vy=0;
        v.r = Math.floor(centi.rnd(2));
        v.near_num = 0;
        a.push(v);
      }
      if ( centi.c%300 == 60 ) shuff();
      if ( centi.c%52 == 0 ) {
        dist_mul = centi.rnd(1.5, 6);
      }
      centi.clr();
      var w = centi.w;
      var h = centi.h;
      centi.gradR(w/2, h/2, 0, w/2, h/2, w/2);
      centi.gradColor(0, 235, 230, 200);
      centi.gradColor(1, 140, 135, 100);
      centi.rect(0, 0, w, h);
      centi.tree(a);
      var dist = 100;
      for ( var i=0; i<NUM; i++ ) {
        var x = a[i].x;
        var y = a[i].y;
        var vx = a[i].vx;
        var vy = a[i].vy;
        var r = a[i].r;
        var b=centi.nears(a[i],20,12000);
        var nn=b.length;
        centi.col(nn*14+r*80,nn*10+10-r*10,nn*3+100-r*30);
        var near_num = 0;
        for ( var j = 0; j<nn; j++ ) {
          var p = b[j][0];
          var d = Math.sqrt(b[j][1]);
          var dd = centi.vec2(x - p.x, y - p.y).normalized();
        
          if ( r == p.r ) {
            near_num++;
            if (  d>dist ) {
              // vx += (p.x - x)*0.008;
              // vy += (p.y - y)*0.008;
             
            vx += dd.x * ((dist-d))  * 0.015;
            vy += dd.y * ((dist-d))  * 0.015;
            } else if ( d < dist ) {
              
            vx += dd.x * ((dist-d))  * 0.022;
            vy += dd.y * ((dist-d))  * 0.022;
            }
          //   centi.col(255,200,0,170);
          centi.line(x, y, p.x, p.y);
          } else {
            var dist2 = dist*dist_mul;
            if (  d<dist2 ) {
            vx += dd.x * ((dist2-d)) * 0.01;
            vy += dd.y * ((dist2-d)) * 0.01;
            }
          }
          
        }
        a[i].near_num = near_num;
        vx += (centi.cx - x)*0.0006;
        vy += (centi.cy - y)*0.0006;
        
        if ( y < centi.cy ) {
          //vy+=0.7;
        } else {
          //vy-=0.5;
          //vx+=centi.nz(x*0.001,y*0.003,centi.c*0.01)*centi.GOLD;
          //vy+=centi.nz(y*0.002,x*0.003,centi.c*0.02)*2;
        }
        x+=(vx);
        y+=(vy);
        //if( x<0 || x>centi.w){
          //x=centi.rnd(centi.w)
        //}
        a[i].x=(x);
        a[i].y=(y);
        a[i].vx=(vx*0.92);
        a[i].vy=(vy*0.92);
        if ( r%2 == 0 ) centi.strk();
        else centi.fill();
        centi.oval(x,y,5);
      }
    }
  function onMouseMove(e) {
  }
  
  function onMouseDown(e) {
  
    shuff();
  }
    
  function shuff(){
    for ( var i=0; i<NUM/4; i++ ) {
      var index = Math.floor(centi.rnd(a.length));
      a[index].r = !a[index].r;  
    }
  }
  function onMouseUp(e) {
  
  }
    function update(){
      requestAnimationFrame(update);
      centi.update();
    }
    
    if ( window.addEventListener ) {
      window.addEventListener('resize', onResize, false);
    } else if ( window.onresize ) {
      window.onresize = onResize;
    }
    
    function onResize(){
      if ( window.innerWidth == centi.canvas.width ) return;
       centi.size(centi.sizeW, centi.sizeH);
    }
  };})();

