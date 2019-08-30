$(document).ready(function(){
    let all_p = [];
    let i = 0;

    $('.entry-content p').each(function(){
        $(this).attr('data-bookmark', 'bookmark-' + i);
        all_p[i] = $(this);
        i++;
    });

    if(window.location.hash !== ""){
        let hash = window.location.hash.replace('#','');
        let bookmark = null;
        try {
            bookmark = $('p[data-bookmark=' + hash + ']');
        }
        catch(ReferenceError){
            // do nothing
        }
        if(bookmark != null && bookmark.length > 0){
            $("html, body").animate({scrollTop: bookmark.offset().top}, 100);
        }
    }
    let docViewTop = 0;
    let j = 0;
    let p = null;
    window.addEventListener('scroll', function(e) {
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            // find first all_p with offset-top > docViewTop
            docViewTop = $(window).scrollTop();
            for (j = 0; j < all_p.length; j++) {
                p = all_p[j];
                if (p.offset().top >= docViewTop) {
                    window.location.hash = p.attr('data-bookmark');
                    break;
                } // if
            } // for loop
        }, 250)); // timeout fx
	}); // scroll
}); // doc ready
