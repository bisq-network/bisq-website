/* Mod for Alpine - line 45 */
/*! http://tinynav.viljamis.com v1.03 by @viljamis */
(function ($, window, i) {
  $.fn.tinyNav = function (options) {

    // Default settings
    var settings = $.extend({
      'active' : 'selected', // String: Set the "active" class
      'header' : false // Boolean: Show header instead of the active item
    }, options);

    return this.each(function () {

      // Used for namespacing
      i++;

      var $nav = $(this),
        // Namespacing
        namespace = 'tinynav',
        namespace_i = namespace + i,
        l_namespace_i = '.l_' + namespace_i,
        $select = $('<select/>').addClass(namespace + ' ' + namespace_i);

      if ($nav.is('ul,ol')) {

        if (settings.header) {
          $select.append(
            $('<option/>').text('Navigation')
          );
        }

        // Build options
        var options = '';
		var indent = 0;
		var indented = ["&nbsp;"];
		for ( var i = 0; i < 10; i++) {
			indented.push(indented[indented.length-1]+indented[indented.length-1]);
		}
		indented[0] = "";
        $nav
          .addClass('l_' + namespace_i)
          .children('li')
          .each(buildNavTree=function () {
            var a = $(this).children('a').first();
            if(a.length > 0){
	            options +=
	              '<option value="' + a.attr('href') + '">' +
	              indented[indent] + a.text() +
	              '</option>';
	              indent++;
	              $(this).children('ul,ol').children('li').each(buildNavTree);
	              indent--;
              }
          });

        // Append options into a select
        $select.append(options);

        // Select the active item
        if (!settings.header) {
          $select
            .find(':eq(' + $(l_namespace_i + ' li')
            .index($(l_namespace_i + ' li.' + settings.active)) + ')')
            .attr('selected', true);
        }

        // Change window location
        $select.change(function () {
          window.location.href = $(this).val();
        });

        // Inject select
        $(l_namespace_i).after($select);

      }

	$('option[value="'+document.location+'"]').attr("selected","selected");

    });

  };
})(jQuery, this, 0);