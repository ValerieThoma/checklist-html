$(document).ready(function() {
	$('select').material_select();

	//assign value to checked items//
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
	$('.none').on('change', function(e){
		e.stopPropagation();
		this.value = this.checked ? 0 : 0;
		console.log(this.value);
	})

	//add values, return sum//
	var sum = 0;
    $('#add').click(function() {
        sum = 0;
        $('#tampon :checkbox:checked').each(function(idx, elm) {
            sum += parseFloat(elm.value, 10);
        });
        this.value = sum
       
    
    });
    

	

	// $('select').material_select('destroy');
});



