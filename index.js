lightbox.option({
    'resizeDuration': 500,
    'wrapAround': true,
    'albumLabel': ' %1 / %2',
})

function fadeAnime(){
    $('#gallery li').each(function() {

        const elemPos = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight){
            $(this).addClass('flipLeft');
        } else {
            $(this).removeClass('flipLeft');
        }

    });
}

$(window).on('load scroll', function(){
    fadeAnime();
});