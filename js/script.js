 $( function () {
	 'use strict';
  	$(window).scroll(function(){
       var navbar = $('.navbar');
       if($(window).scrollTop() >= navbar.height()){
        navbar.addClass('scrolled');
       }else{
        navbar.removeClass('scrolled');
       }
   });

  //Counter 
  $('.counter').counterUp({
    delay: 10,

    time: 2000
    
	});

});