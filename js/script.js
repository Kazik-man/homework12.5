$('.header__menu').on('click', function (e) {
	e.preventDefault;
	$('.menu_btn').toggleClass('menu_btn-active');
    $('.header__menu-list').toggleClass('header__menu-list-active');
    
});