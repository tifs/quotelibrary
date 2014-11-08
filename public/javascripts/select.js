// search box that doesn't work and we don't need yet
// $(function() {
// 	$('#search-box').keyup(function() {
// 		var query = $(this).val();
// 		$('.quotes').each(function() {
// 			$(this).toggle(('quote') === query);
// 		});
// 	});
// });

// author selector - WE BUILT THIS ON THE BACKEND!
// $('.authors').click(function(){
// 	var author = $(this).text();
// 	console.log(author);
// 	$(this).toggleClass('selected');
// });

// book selector - WE BUILT THIS ON THE BACKEND TOO!!!
// $('.books').click(function(){
// 	var book = $(this).text();
// 	console.log(book);
// 	$(this).toggleClass('selected');
// });



// quote selector
$('.quotes').click(function(){
	var quote = $(this).text();
	var book = $(this).BookId;
	$(this).toggleClass('transformed');
	$('.quotes:not(this)').toggleClass('blur');
	// $('body').not(this).toggleClass('blur');

});

// $('.quotes').click(function(){
// 	var quote = $(this).text();
// 	var book = $(this).BookId;
//   $('.quotes').not(this).each(function(){
//   	$(this).toggleClass('blur');
//   });
//      $(this).toggleClass('transformed');
// });

// random colors for the quotes inside the center column
$( function (){
    $( "#column-center div" ).each( function (){
        var rng = Math.round(Math.random()*9);
        var rndmClass = [ 'yellow', 'deep-orange', 'burnt-orange', 'indigo', 'old-green', 'new-green', 'light-blue', 'brick-red', 'purple', 'leaf-green' ];

        $(this).addClass( rndmClass[rng]);
    });
});