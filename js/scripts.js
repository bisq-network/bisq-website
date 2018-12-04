$( document ).ready( function() {

    /**************************************************
    detect os to show correct download links
    **************************************************/

    var uAgent = navigator.userAgent || navigator.vendor || window.opera;
    var OSName = "Unknown OS";

    if( uAgent.indexOf( "Win" ) > -1 ) {
        OSName = "Windows";
    } else if( uAgent.indexOf( "Mac" ) > -1 ) {
        OSName = "MacOS";
    } else if( uAgent.indexOf( "Linux" ) > -1 ) {
        OSName = "Linux";
    }

    //desktop
    switch( OSName ) {
        case "MacOS":
            showOSDownloads( 'mac' );
            break;
        case "Windows":
            showOSDownloads( 'win64' );
            break;
        case "Linux":
            if( uAgent.indexOf( "Ubuntu" ) > -1 || uAgent.indexOf( "Debian" ) > -1 ) {
                showOSDownloads( 'deb64' );
            } else {
                $( '.id-all').removeClass('hidden').addClass('shown');
            }
            break;
    }

    //mobile
    if( /android/i.test( uAgent ) ) {
        $( '.downloads-android' ).removeClass( 'hidden' ).addClass( 'shown' );
        $( '.id-all').removeClass( 'hidden' ).addClass( 'shown' );
    }
    if( /iPad|iPhone|iPod/.test( uAgent ) && !window.MSStream ) {
        $( '.downloads-ios' ).removeClass('hidden').addClass( 'shown' );
        $( '.id-all' ).removeClass( 'hidden' ).addClass( 'shown' );
    }

    //add virtual pageview and event tracking for download attempts
    $( '.dl-win64, .dl-mac, .dl-deb64' ).on( 'click', function() {
        ga( 'send', 'pageview', location.pathname + 'release' );
        ga( 'send', 'event', 'Release Build', 'download', $(this).attr('class').split('-').pop() );
    });

    //change dom to show downloads for the specific os
    function showOSDownloads( os ) {
        $( '.dl-' + os ).addClass( 'selected' );
        $( '.id-' + os ).removeClass( 'hidden' ).addClass( 'shown' );
        return;
    }







  //Home Video
  $('#play-video').on('click', function(ev) {
    ev.preventDefault();
    //$("#video")[0].src += "&autoplay=1";
    $("#video-overlay").fadeIn('fast');
    $('body').addClass('no-scroll');

  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) $("#video-overlay").fadeOut('fast');
    $('body').removeClass('no-scroll');
  });




  //How to get started
  $('.step').on({
    mouseenter: function () {
      $('.step').css('opacity', 0.5),
      $(this).css('opacity', 1),
      $('.step-image').addClass('d-none').removeClass('d-block');
      $('.'+$(this).attr('data-image')).addClass('d-block').removeClass('d-none');
      console.log($(this).attr('data-image'));
    },
    mouseout: function () {}
  });



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



       if($(this).attr('id') !== undefined){
         //add hash to url
         if(history.pushState) {
              history.pushState(null, null, '#' + $(this).attr('id'));
          } else {
              location.hash = '#' + $(this).attr('id');
          }
        }

     });

  });

  if(window.location.hash) {
    $("html, body").animate({ scrollTop: ($(window.location.hash).offset().top - 100) }, 1000);
    $(window.location.hash).addClass('accordion-toggle-active').next().slideToggle('fast');
  }





});
