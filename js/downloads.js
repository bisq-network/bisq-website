var $ = jQuery.noConflict();
$(function () {
    var OSName="Unknown OS";
    if (navigator.userAgent.indexOf("Win")!=-1) OSName="Windows";
    else if (navigator.userAgent.indexOf("Mac")!=-1) OSName="MacOS";
    else if (navigator.userAgent.indexOf("Linux")!=-1) OSName="Linux";
    else if (navigator.userAgent.indexOf("X11")!=-1) OSName="UNIX";

    switch(OSName){
        case "MacOS":
            $('#dl-mac').addClass('selected');
            $('#id-mac').removeClass('hidden').addClass('shown');
            break;
        case "Windows":
            // if 64-bit
            if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1 ){
                $('#dl-win64').addClass('selected');
                $('#id-win64').removeClass('hidden').addClass('shown');
            }else{
                $('#dl-win32').addClass('selected');
                $('#id-win32').removeClass('hidden').addClass('shown');
            }
            break;
        case "Linux":
            var is64 = navigator.userAgent.indexOf("x86_64") != -1;
            if (navigator.userAgent.indexOf("Ubuntu")!=-1 || navigator.userAgent.indexOf("Debian")!=-1 )  {
               $(is64 ? '#dl-deb64' : '#dl-deb32').addClass('selected');
               $(is64 ? '#id-deb64' : '#id-deb32').removeClass('hidden').addClass('shown');
            }
            else if (navigator.userAgent.indexOf("Redhat")!=-1 || 
                     navigator.userAgent.indexOf("CentOS")!=-1 ||
                     navigator.userAgent.indexOf("Fedora")!=-1 ) {
               $(is64 ? '#dl-rpm64' : '#dl-rpm32').addClass('selected');
               $(is64 ? '#id-rpm64' : '#id-rpm32').removeClass('hidden').addClass('shown');
            }
            break;
        default: 
            break;
    }

    // add virtual pageview and event tracking for download attempts
    $('#dl-win32, #dl-win64, #dl-mac, #dl-deb32, #dl-deb64').click(function(){
        ga('send','pageview', location.pathname + 'release');
        ga('send', 'event', 'Release Build', 'download', $(this).attr('id').split('-').pop());
    })
});

