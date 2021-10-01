// CLOSE
$('.menu__close').on('click', function(){
    var $root = $(this).parents('.root');
    var $overlay = $root.children('.overlay')
    var $menu = $(this).parents('.menu');
    $root.removeAttr("style");
    $overlay.fadeOut();
        setTimeout(function(){
            $overlay.remove();
        },350);
        if($menu.is(':visible')){
            $menu.animate({width:'hide'}, 250);
        }else{
            $root.removeAttr("style");
            $(this).off('click');
        }
})

// SUBMENU
$('.menu__title').click(function(){
    $(this).children('.menu__submenu').animate({width:'show'}, 250);
})

// SUB-SUBMENU
$('.menu__item').click(function(e){
    $(this).children('.menu__sub-submenu').animate({height:'toggle'}, 650);
    e.stopPropagation();
})

// BACK
$('.menu__back').click(function(e){
    var $sub_submenu = $(this).next('.menu__sublist').find('.menu__sub-submenu');
    var $submenu = $(this).parent('.menu__submenu');
    if ($sub_submenu.is(':visible') && $submenu.is(':visible')) {
        $sub_submenu.animate({height:'hide'}, 250)
    }else{
        $submenu.animate({width:'hide'}, 250)            
    }
    e.stopPropagation();
})
