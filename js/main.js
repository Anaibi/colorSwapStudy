$(window).load(function() { 
  $('.sidebar').hover(function() {
  	$(this).addClass('scroll');
  	$('body').addClass('no-scroll');
  }, function() {
  	$(this).removeClass('scroll');
  	$('body').removeClass('no-scroll');
  })
});