$('.burger').click(function(){
    $(this).parents('.root').css({"overflow": "hidden"});
    $('<div class="overlay"></div>').hide().prependTo('.root').fadeIn();
    $(this).nextAll('.menu').animate({width:'show'}, 250);
})