// $(function() {
// 	$('#search-box').keyup(function() {
// 		var query = $(this).val();
// 		$('.quotes').each(function() {
// 			$(this).toggle(('quote') === query);
// 		});
// 	});
// });


$('.authors').click(function(){
	var author = $(this).text();
	console.log(author);
	$('.books').each(function() {
		$('.quotes').each(function() {
			$(this).toggle(('author') === author);
		});
	});
});


$('.authors').click(function(){
	// alert("IT WORKS SORT OF!!!");
});


$('.quotes').click(function() {
	console.log("Hello!");
	$(this).toggleClass('selected');
});


// $('#column-left').click(function(){
// 	alert("IT WORKS SORT OF!!!");
// });