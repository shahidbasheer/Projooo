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
	// hack modal window and fix body paddign
	$("#add_new_workspace .close").on("click", function(){
		$("#add_new_workspace").toggleClass("in");
		setTimeout(function(){ 
			$('#add_new_workspace').modal('hide');
			
			$('body').css({
			'padding-right': '0',
			});
			
	 	}, 1001);

	});
	
});//on laod


  

