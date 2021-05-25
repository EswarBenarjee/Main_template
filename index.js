var test = false;
var tog = true;
var test1=true;
var test2=true;
var test3=true;
var test4=true;
var test5=true;
var test6=true;

function dropme(classme) {
  var cla= classme.substring(9,11);
  var drops = $(".faq ul li ul li");
  var cha= $(".faq ul li."+cla+" ul li").attr("id");
  console.log(cha);
  drops.each( drop => {
    $(".faq ul li ul li").attr("id","");
    $(".faq ul li i").removeClass("fa-chevron-up");
    $(".faq ul li i").addClass("fa-chevron-down");
  });
  if(cha==="") {
    $(".faq ul li."+cla+" ul li").attr("id","visit");
    $(".faq ul li."+cla+" .iconify").css("top","20px");
    $(".faq ul li."+cla+" i").css("top","20px");
    $(".faq ul li."+cla+" i").removeClass("fa-chevron-down");
    $(".faq ul li."+cla+" i").addClass("fa-chevron-up");
  }
}

$('#home #sharebox').animate({marginLeft: "0"}, 1000);
$(window).bind('scroll', function() {
    if($(window).scrollTop() >= $("#home").offset().top + 10) {
      $("#fix-top").addClass("top-fix");
    }
    if($(window).scrollTop() < $("#home").offset().top + 10) {
      $("#fix-top").removeClass("top-fix");
    }
    if($(window).scrollTop() >= $("#home").offset().top) {
        $(".h").attr("id","current");
    }
    if($(window).scrollTop() >= $("#home").offset().top + 200) {
        $(".h").attr("id","");
    }
    if($(window).scrollTop() >= $("#about").offset().top - 100) {
      if(test2) {
        $('#about #sharebox').animate({marginLeft: "0"}, 1000);
        test2=false;
      }
        $(".a").attr("id","current");
    }
    if($(window).scrollTop() >= $("#about").offset().top + 400) {
        if(!test) {
          move();
          test=true;
        }
        // Skills Counts
        const counters = document.querySelectorAll(".purecounter");
        const speed = 200;

        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            const inc = Math.ceil(target/speed);
            if(count < target) {
              counter.innerText = count + inc;
              setTimeout(updateCount , 1);
            } else {
              counter.innerText = target;
              return;
            }
          }

          updateCount();
        });

      }
    if($(window).scrollTop() > $("#about").offset().top + 200 || $(window).scrollTop() < $("#about").offset().top - 100) {
        $(".a").attr("id","");
    }
    if($(window).scrollTop() >= $("#services").offset().top - 200) {
      if(test3) {
        $('#services #sharebox').animate({marginLeft: "0"}, 1000);
        test3=false;
      }
        $(".s").attr("id","current");
      }
    if($(window).scrollTop() > $("#services").offset().top + 200 || $(window).scrollTop() < $("#services").offset().top -200) {
        $(".s").attr("id","");
    }
    if($(window).scrollTop() >= $("#portfolio").offset().top - 200) {
      if(test5) {
        $('#portfolio #sharebox').animate({marginLeft: "0"}, 1000);
        test5=false;
      }
      $(".p").attr("id","current");
      }
    if($(window).scrollTop() > $("#portfolio").offset().top + 200 || $(window).scrollTop() < $("#portfolio").offset().top -200) {
        $(".p").attr("id","");
    }
    if($(window).scrollTop() >= $("#pricing").offset().top - 200) {
      if(test6) {
        $('#pricing #sharebox').animate({marginLeft: "50px"}, 1000);
        test6=false;
      }
      /*
      *Pricing
      */
      if(tog) {
        $(".pricing-col").fadeOut("fast");
        $(".pricing-col").fadeIn("slow");
        tog=false;
      }
    }

    // if($(window).scrollTop() >= $("#Contact").offset().top - 300) {
    //     $(".c").attr("id","current");
    //   }



});

function move() {
  var htmlelem = document.getElementById("html");
  var htmlwidth = 1;
  var htmlid = setInterval(htmlframe, 1);
  function htmlframe() {
    if (htmlwidth >= 90) {
      clearInterval(htmlid);
    } else {
      htmlwidth++;
      htmlelem.style.width = htmlwidth + '%';
    }
  }
  var csselem = document.getElementById("css");
  var csswidth = 1;
  var cssid = setInterval(cssframe, 1);
  function cssframe() {
    if (csswidth >= 80) {
      clearInterval(cssid);
    } else {
      csswidth++;
      csselem.style.width = csswidth + '%';
    }
  }
  var jselem = document.getElementById("js");
  var jswidth = 1;
  var jsid = setInterval(jsframe, 1);
  function jsframe() {
    if (jswidth >= 75) {
      clearInterval(jsid);
    } else {
      jswidth++;
      jselem.style.width = jswidth + '%';
    }
  }
  var phpelem = document.getElementById("php");
  var phpwidth = 1;
  var phpid = setInterval(phpframe, 1);
  function phpframe() {
    if (phpwidth >= 80) {
      clearInterval(phpid);
    } else {
      phpwidth++;
      phpelem.style.width = phpwidth + '%';
    }
  }
  var wpelem = document.getElementById("wp");
  var wpwidth = 1;
  var wpid = setInterval(wpframe, 1);
  function wpframe() {
    if (wpwidth >= 90) {
      clearInterval(wpid);
    } else {
      wpwidth++;
      wpelem.style.width = wpwidth + '%';
    }
  }
  var pselem = document.getElementById("ps");
  var pswidth = 1;
  var psid = setInterval(psframe, 1);
  function psframe() {
    if (pswidth >= 55) {
      clearInterval(psid);
    } else {
      pswidth++;
      pselem.style.width = pswidth + '%';
    }
  }
}


/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

function testme() {
  if (window.matchMedia('screen and (min-width: 993px)').matches) {
    return 3;
  }
  return 1;
}
  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: testme(),
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });


    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
      let portfolioContainer = select('.portfolio-container');
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item'
        });

        let portfolioFilters = select('#portfolio-flters li', true);

        on('click', '#portfolio-flters li', function(e) {
          e.preventDefault();
          portfolioFilters.forEach(function(el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');

          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          portfolioIsotope.on('arrangeComplete', function() {
            AOS.refresh()
          });
        }, true);
      }

    });

    /**
     * Initiate portfolio lightbox
     */
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });

    /**
     * Portfolio details slider
     */
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });


    //Get the button:
    mybutton = document.getElementById("myBtn");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
