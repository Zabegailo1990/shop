$('.burger').click(function(){
    $(this).parents('.root').css({"overflow": "hidden"});
    $('<div class="overlay"></div>').hide().prependTo('.root').fadeIn(250);
    $(this).nextAll('.menu').animate({width:'show'}, 250);
})