$(document).ready(function(){
    // CLOSE
    $('.menu__close').on('click', function(){
        const $root = $(this).parents('.root');
        const $overlay = $('.overlay');
        const $menu = $(this).parents('.menu');

        $($root).removeAttr("style");
        $overlay.fadeOut(250);
            setTimeout(function(){
                $overlay.remove();
            },250);
        $menu.animate({width:'hide'}, 250);
    })

    // SUBMENU
    $('.menu__title').on('click',function(){
        const $submenu = $(this).children('.menu__submenu');
        const $menu = $(this).parents('.menu');
        console.log($menu.height())

        if( $submenu.is(':hidden')){
            $(this).children('.menu__submenu').animate({width:'show',}, 250);
            $('<div class="overlay"></div>').css('opacity', '0.6').hide().prependTo($menu).fadeIn(350);
        }
    })

    // SUB-SUBMENU
    $('.menu__item').click(function(e){
        $(this).children('.menu__sub-submenu').animate({height:'toggle'}, 250);
        e.stopPropagation();
    })

    // BACK
    $('.menu__back').click(function(e){
        var $sub_submenu = $(this).next('.menu__sublist').find('.menu__sub-submenu');
        var $submenu = $(this).parent('.menu__submenu');
        var $overlay = $(this).parents('.menu').children('.overlay');

            if ($sub_submenu.is(':visible') && $submenu.is(':visible')) {
                $sub_submenu.animate({height:'hide'}, 250)
            }else{
                $submenu.animate({width:'hide'}, 250)
                $overlay.fadeOut(250);
                setTimeout(function(){
                    $overlay.remove();
                }, 250); 
            }
        e.stopPropagation();
    })
})
