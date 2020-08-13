$( document ).ready( function() {

    /**************************************************
    dark mode toggle
    **************************************************/

    $( ".mode-toggle" ).on( "click", function() {
      $("body").toggleClass("dark-mode");
      $("body").hasClass("dark-mode") ? Cookies.set("darkmode", 1) : Cookies.set("darkmode", 0);
      return;
    });

});
