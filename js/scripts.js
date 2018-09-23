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
      // if 64-bit
      if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1) {
        $('.dl-win64').addClass('selected');
        $('.id-win64').removeClass('hidden').addClass('shown');
      } else {
        $('.dl-win32').addClass('selected');
        $('.id-win32').removeClass('hidden').addClass('shown');
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
    default:
      break;
  }

  console.log(OSName);

  // add virtual pageview and event tracking for download attempts
  $('.dl-win32, .dl-win64, .dl-mac, .dl-deb32, .dl-deb64').click(function() {
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



});