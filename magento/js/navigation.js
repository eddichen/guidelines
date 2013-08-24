jQuery(function($){
    $('.nav_toggle').click(function(){
       $('.nav').slideToggle('slow', function(){
           
       });
    });
    $('.nav_link a').click(function(){
       $('.nav').slideToggle('fast', function(){
           
       });
    });
});