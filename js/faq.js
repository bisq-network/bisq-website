$( document ).ready( function() {

    //FAQ Accordion
    $('.accordion').each(function() {

        $(this).find('.accordion-toggle').click(function(event) {
            event.preventDefault();

            $(".accordion-toggle").not($(this)).removeClass('accordion-toggle-active');

            if($(this).hasClass('accordion-toggle-active')){
                $(this).removeClass('accordion-toggle-active');
            }else{
                $(this).addClass('accordion-toggle-active');
            }

            $(this).next().slideToggle('fast');
            $(".accordion-content").not($(this).next()).slideUp('fast');

            if($(this).attr('id') !== undefined) {
                //add hash to url
                if(history.pushState) {
                    history.pushState(null, null, '#' + $(this).attr('id'));
                } else {
                    location.hash = '#' + $(this).attr('id');
                }
            }
        });
    });

    if( window.location.hash ) {
        showAccordionItem();
    }

    $( ".accordion-content a" ).on( "click", function() {
        var address = $(this).attr('href');
        if( address.charAt(0) === '#' ) {
            showAccordionItem( address );
        };
        return;
    });

    function showAccordionItem( anchorAddress ) {

        var address = anchorAddress ? anchorAddress : window.location.hash;

        $("html, body").animate( {
            scrollTop: ( $( address ).offset().top - 100 )
        }, 1000 );

        $( address ).addClass( 'accordion-toggle-active' ).next().slideToggle( 'fast' );

        return;
    }

});
