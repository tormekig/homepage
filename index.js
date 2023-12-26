lightbox.option({
    'resizeDuration': 500,
    'wrapAround': true,
    'albumLabel': ' %1 / %2',
})

function scrollAnimeTrigger(elem, offset, className) {

    $(elem).each(function() {
        var elemPos = $(this).offset().top - offset;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight){
            $(this).addClass(className);
        } else {
            $(this).removeClass(className);
        }
    })

}

$(window).on('load scroll', function(){

    scrollAnimeTrigger('.leftAnime', 0, 'slideAnimeLeftRight')
    scrollAnimeTrigger('.rightAnime', 0, 'slideAnimeRightLeft')
    scrollAnimeTrigger('.intro-photo-inner img', 0, 'intro-photo-inner-img-anination')
    scrollAnimeTrigger('#gallery li', 0, 'flipLeft')
    scrollAnimeTrigger('.dot-content-content', 0, 'dot-content-content-animation')

});

function getScroll(elem, isTop = false) {

    var scroll = $(window).scrollTop() - elem.offset().top
    if (!isTop) scroll += elem.height();

    return scroll;

}

$(window).scroll(function() {

    var elem = $('.intro-photo-inner img')
    var scroll = getScroll(elem, false)
    elem.css({
        // transform: 'scale(' + (100 + scroll/30)/100 + ')',
    });

    var elem = $('#profile-content')
    var scroll = getScroll(elem, false)
    elem.css({
        transform: 'translateY(' + -(scroll/5)  + "px)",
    });


    var elem = $('.dot-content')
    var scroll = getScroll(elem, false)
    elem.css({
        'background-position': "center " + scroll/10 + "px",//スクロール値を代入してtopの位置をマイナスにずらす
    });
});