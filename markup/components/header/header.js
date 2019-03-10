//Выпадающее меню
$(document).ready(function(){ 
	$('.header_bottomMenu__dropdownMenu').on( 'click', function() {
		$('.blur').toggleClass('visible');
		$('.dropdownMenu_container').toggleClass('visible');
	});
// Вывод окна об отсутствии результатов###################################
	// $('.searchForm_textArea').focus(
	//  function() {
	// 	$('.searchForm_noSearchResult').addClass('visible');
	// 	$('.blur').addClass('visible');
	// });
// Скрытие окна об отсутствии результатов###################################
	// $('.searchForm_textArea').focusout(
	//  function() {
	// 	$('.searchForm_noSearchResult').removeClass('visible');
	// 	$('.blur').removeClass('visible');
	// });
	// ####################################################
	/*// Вывод окна результатов###################################
	$('.searchForm_textArea').focus(
	 function() {
		$('.header_bottomMenu__searchForm__searchResults').addClass('visible');
		$('.blur').addClass('visible');
	});
// // Скрытие окна результатов###################################
	$('.searchForm_textArea').focusout(
	 function() {
		$('.header_bottomMenu__searchForm__searchResults').removeClass('visible');
		$('.blur').removeClass('visible');
	});*/
	// ####################################################
	// $('.header_bottomMenu__basket').on( 'click', function() {
	// 	$('.blur').toggleClass('visible');
	// 	$('.basket_emptyBasket').toggleClass('visible');
	// });
	$('.header_bottomMenu__basket').on( 'click', function() {
		$('.blur').toggleClass('visible');
		$('.basket_fullBasket').toggleClass('visible');
	});

	$('.searchForm_textArea').on( 'click', function() {
		$('.searchForm_searchResults').toggleClass('visible');
		$('.blur').toggleClass('visible');
	});

	$('.blur').on( 'click', function() {
		$('.searchForm_searchResults').removeClass('visible');
		$('.basket_fullBasket').removeClass('visible');
		$('.header_bottomMenu__basket__emptyBasket').removeClass('visible');
		$('.dropdownMenu_container').removeClass('visible');
		$('.blur').removeClass('visible');
	});
});