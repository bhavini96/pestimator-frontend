/* Select2 dropdwon*/
// $(".js-select2").each(function() {
//     $(this).select2({
//        	placeholder: $(this).attr('placeholder'),
//        	width: "100%",
// 		closeOnSelect : false,
// 		allowHtml: true,
// 		allowClear: true,
// 		tags: true 
//    });
//  });


/* Customize datatable */	
$(document).ready(function() {
    var table = $('#customize-datatable').DataTable( {
        responsive: true,
        "pagingType": "simple_numbers",
        "lengthChange": false,
        "pageLength": 20,
        language: {
		    paginate: {
		      next: '>>', // or '→'
		      previous: '<<' // or '←' 
		    }
		}
        //searching: false
    });
    var dataTable = $('#customize-datatable').dataTable();
    $("#searchbox").keyup(function() {
        dataTable.fnFilter(this.value);
    });   
} );


// $(document).ready(function() {
//     $('#multiple-checkboxes').multiselect({
//       includeSelectAllOption: true,
//     });
// });



$(document).ready(function() {
    $('.demo').minicolors();
});



