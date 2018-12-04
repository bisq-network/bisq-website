$(document).ready(function() {




  //OS detection
  var OSName = "Unknown OS";
  if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
  else if (navigator.userAgent.indexOf("Mac") != -1) OSName = "MacOS";
  else if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
  else if (navigator.userAgent.indexOf("X11") != -1) OSName = "UNIX";

  switch (OSName) {
    case "MacOS":
      $('.dl-mac').addClass('selected');
      $('.id-mac').removeClass('hidden').addClass('shown');
      break;
    case "Windows":
      if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1) {
        $('.dl-win64').addClass('selected');
        $('.id-win64').removeClass('hidden').addClass('shown');
      }
      break;
    case "Linux":
      var is64 = navigator.userAgent.indexOf("x86_64") != -1;
      if (navigator.userAgent.indexOf("Ubuntu") != -1 || navigator.userAgent.indexOf("Debian") != -1) {
        $(is64 ? '.dl-deb64' : '.dl-deb32').addClass('selected');
        $(is64 ? '.id-deb64' : '.id-deb32').removeClass('hidden').addClass('shown');
      } else if (navigator.userAgent.indexOf("Redhat") != -1 ||
        navigator.userAgent.indexOf("CentOS") != -1 ||
        navigator.userAgent.indexOf("Fedora") != -1) {
        $(is64 ? '.dl-rpm64' : '.dl-rpm32').addClass('selected');
        $(is64 ? '.id-rpm64' : '.id-rpm32').removeClass('hidden').addClass('shown');
      }
      break;
  }


  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/windows phone/i.test(userAgent)) {
    //nothing yet
  }
  if (/android/i.test(userAgent)) {
    $('.downloads-android').removeClass('hidden').addClass('shown');
    $('.id-all').removeClass('hidden').addClass('shown');
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    $('.downloads-ios').removeClass('hidden').addClass('shown');
    $('.id-all').removeClass('hidden').addClass('shown');
  }



  //console.log(OSName);

  // add virtual pageview and event tracking for download attempts
  $('.dl-win64, .dl-mac, .dl-deb32, .dl-deb64').click(function() {
    ga('send', 'pageview', location.pathname + 'release');
    ga('send', 'event', 'Release Build', 'download', $(this).attr('class').split('-').pop());
  });








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
