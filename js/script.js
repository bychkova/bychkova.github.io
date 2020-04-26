jQuery(document).ready(function(){
	
	//show search-bar
	var searchBar = $('.search-box');
	var displayValue = $('.search-box').css('display');
	
	$('.mobile-search').click(function (){
		console.log(displayValue);
		if (displayValue === 'none'){
			searchBar.css('display', 'block');
			displayValue = 'block'
		}else{
			searchBar.css('display', 'none')
			displayValue = 'none'
		}
	});
	
	//show side-menu
	$('.mobile-menu').click(function(){
		$('.side-menu').toggleClass('mobile-show');
		$('.page-content').toggleClass('content-to-side');
		$('.mobile-menu').toggleClass('mobile-menu-opened');
		if ( $(window).width() < 500 ){
			$('h1').toggleClass('mobile-show');
		}
		
		
	});
	
	//show more items
	$('.menu-item__more').click(function(){
		$('.menu-drop-down').toggleClass('menu-drop-down__is-open');
	});
	
	//slide mobile menu
	$(window).resize(function(){
		if ( $(window).width() < 768 ){
			showMobilePricing();
		}
	});
	
	if ( $(window).width() < 768 ){
		showMobilePricing();
	}
	
	function showMobilePricing(){
		$('.menu-list').addClass('owl-carousel owl-theme owl-loaded');
			
		$('.menu-list').owlCarousel({
			items: 5,
			dots: false
		});
	}
	
});