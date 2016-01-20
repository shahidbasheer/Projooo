jQuery(document).ready(function($) {

$("#txtEditor").Editor();

$("#drop-area-div").dmUploader();

$('#tags').tagsInput( {
	'height':'50px',
   	'width':'100%'
} );

	$('.preject-window').on('click', function(event) {
		event.preventDefault();
		$('#add_new').modal('hide');
		$('#add_new_workspace').modal('show');
	});
	
	
	
});//on laod


  

