$(".navi>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown();
}).mouseout(function(){
    $(this).find(".submenu").stop().slideUp();
});

setInterval(function(){
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: -1200});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: -2400});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: 0});
    $(".slidelist").delay(2000);
});