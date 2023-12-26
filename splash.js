$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');


    $("#splash").delay(1500).fadeOut('slow',function(){
        $("body,html").scrollTop(0);
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    });
    
    $('.splashbg').on('animationend', function() {
    });
});

$(window).on('load',function(){
    $.when(
        $("#loading").delay(1500).fadeOut('slow'),
        $("#loading-logo").delay(1200).fadeOut('slow'),
        $("body,html").scrollTop(0)
    ).done(function(){ 
        //after loading animation end
        scrollAnimeTrigger("#top-name", 50, 'bgLRextend')
        scrollAnimeTrigger(".bgappearTrigger", 50, 'bgappear')
        scrollAnimeTrigger("#top-img-container", 0, 'top-img-animation')
    });
    
    $('body').on('animationend webkitAnimationEnd', '.top-img-animation' , function() {
        $('#top-img-container').css({'opacity': 1})
    });
});