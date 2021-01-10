var windowHeight = $(window).height();
var slideHeight = $('.wrp').height();

$(window).scroll(function(){
    if($(window).scrollTop() >= slideHeight){
        $('#navb').css({
            'background-color':'rgb(34,37,56,1)',
            'padding':'15px'
        })
        $('.text-nav').css({
            'color':'#6c757d !important'
        })
    }
    else{
        $('#navb').css({
            'background-color':'rgb(0,0,0, 0.1)',
            'padding':'30px'
        })
        $('.text-nav').css({
            'color':'#fff !important'
        })
    }
});