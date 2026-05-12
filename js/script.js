$(document).ready(function() {
  $('.drawer').drawer();
});

if ($(window).width() > 0) {
  $(window).scroll(function(){  
     if ($(this).scrollTop() > 300) {
        $('#navbar_top').addClass("fixed-top");
        // add padding top to show content behind navbar
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#navbar_top').removeClass("fixed-top");
         // remove padding top from body
        $('body').css('padding-top', '0');
      }   
  });
}


$(document).ready(function() { 
  var owl = $("#EL_MWA_001_DBR");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});

$(document).ready(function() { 
  var owl = $("#EL_MWA_002_BLA");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next2").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev2").click(function(){
    owl.trigger('owl.prev');
  })
});

$(document).ready(function() { 
  var owl = $("#EL_MWA_002_BRO");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next-2").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev-2").click(function(){
    owl.trigger('owl.prev');
  })
});

$(document).ready(function() { 
  var owl = $("#EL_MWA_003_TAN");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next3").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev3").click(function(){
    owl.trigger('owl.prev');
  })
});


$(document).ready(function() { 
  var owl = $("#EL_MWA_004_GRE");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next4").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev4").click(function(){
    owl.trigger('owl.prev');
  })
});


$(document).ready(function() { 
  var owl = $("#EL_MWA_004_NBU");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next5").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev5").click(function(){
    owl.trigger('owl.prev');
  })
});

$(document).ready(function() { 
  var owl = $("#EL_MWA_004_OLI");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next6").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev6").click(function(){
    owl.trigger('owl.prev');
  })
});

$(document).ready(function() { 
  var owl = $("#EL_MWA_005_BLA");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next7").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev7").click(function(){
    owl.trigger('owl.prev');
  })
});


$(document).ready(function() { 
  var owl = $("#EL_MWA_005_BRO");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next8").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev8").click(function(){
    owl.trigger('owl.prev');
  })
});

$(document).ready(function() { 
  var owl = $("#EL_MWA_005_GRE");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next9").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev9").click(function(){
    owl.trigger('owl.prev');
  })
});

$(document).ready(function() { 
  var owl = $("#EL_MWA_005_OLI");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next10").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev10").click(function(){
    owl.trigger('owl.prev');
  })
});

$(document).ready(function() { 
  var owl = $("#EL_MWA_006_DBR");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next11").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev11").click(function(){
    owl.trigger('owl.prev');
  })
});

$(document).ready(function() { 
  var owl = $("#EL_MWA_007_RBR");
  owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1],
      itemsDesktopSmall : [900,1],
      itemsTablet: [600,1],
      itemsMobile : false,
	  pagination : false
  });
  $(".next12").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev12").click(function(){
    owl.trigger('owl.prev');
  })
});

/* CTRL+U, F12, Right Click (disable-enable) */

$(document).ready(function () { 
    $("body").on("contextmenu",function(e){ 
        return false; 
    });
	$('body').bind('cut copy paste', function (e) { 
        e.preventDefault(); 
    });
});
document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};
$(document).keypress("u",function(e) {
  if(e.ctrlKey)
  {
return false;
}
else
{
return true;
}
});

$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});