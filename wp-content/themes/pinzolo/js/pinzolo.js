jQuery(document).ready(function($) {
								
	$('nav ul').superfish(); 
	
	//clear search on click
	defaultValue = jQuery('#Searchform').val();  
	jQuery('#Searchform').click(function() {
		if( this.value == defaultValue ) {
			jQuery(this).val("");
		}
	});
	
	//tinyNav
    jQuery('#menuUl').tinyNav({
        active: 'selected'
    });
	$('html').addClass('js');
	
});