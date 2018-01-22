$(document).ready(function() {
	$('select').material_select();

	//retrieve value from checked items//
	$('.quarter').on('change', function(e) {
		e.stopPropagation();
		this.value = this.checked ? .25 : 0;
		console.log(this.value)
	});
	$('.full').on('change', function(e) {
		e.stopPropagation();
		this.value = this.checked ? 1 : 0;
		console.log(this.value)
	});
	$('.half').on('change', function(e) {
		e.stopPropagation();
		this.value = this.checked ? .5 : 0;
		console.log(this.value)
	});

	//add values//
	

	


	// $('select').material_select('destroy');
});



