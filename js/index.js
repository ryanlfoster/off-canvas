$('#main-container').click(function(event) {
  if(!$(this).hasClass('active') && event.target.id == 'main-container') {
    $('#nav-container').transition({x:'-100%'}, 200, 'ease');
    $('#main-container').transition({x:'0%'}, 200, 'ease');
    $('#main-container').addClass('active');
    $('#nav-container').removeClass('active');
  }
});

$('#menu').click(function(event) {
  if($('#main-container').hasClass('active')) {
    $('#nav-container').transition({x:'0%'}, 200, 'ease');
    $('#main-container').transition({x:'65%'}, 200, 'ease');
    $('#nav-container').addClass('active');
    $('#main-container').removeClass('active');
  }
});

$('li').click(function(event) {
  if($('#nav-container').hasClass('active') && event.target.tagName == 'LI') {
    $('#nav-container').transition({x:'-100%'}, 200, 'ease');
    $('#main-container').transition({x:'0%'}, 200, 'ease');
    $('#main-container').addClass('active');
    $('#nav-container').removeClass('active');
  }
});
