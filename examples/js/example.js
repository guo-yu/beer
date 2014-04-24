// example.js

$(document).ready(function() {
  
  $('.button').hover(function(){
    $(this).addClass('bounce');
  }, function(){
    $(this).removeClass('bounce').addClass('rotate');
  });

});