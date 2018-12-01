let buttons = [
	{ selector: '.btn-pepperonni', item: '.pep', className: null, text: 'pepperonni', price: 1 },
	{ selector: '.btn-mushrooms', item: '.mushroom', className: null, text: 'mushrooms', price: 1 },
	{ selector: '.btn-green-peppers', item: '.green-pepper', className: null, text: 'green peppers', price: 1 },
	{ selector: '.btn-sauce', item: '.sauce', className: 'sauce-white', text: 'white sauce', price: 3 },
	{ selector: '.btn-crust', item: '.crust', className: 'crust-gluten-free', text: 'gluten-free', price: 5 }
];

$(function(){
	$('.btn-crust, .btn-sauce').removeClass('active');

	$('.crust, .sauce').removeClass('crust-gluten-free sauce-white');

	$.each(buttons, function(index, button){
		$(button.selector).click(function(e){
			e.preventDefault();

			$(this).toggleClass('active');

			if(button.className) {
				$(button.item).toggleClass(button.className);
			} else {
				$(button.item).toggle();
			}

			updatePrice();
		});
	});

	function updatePrice() {
		var price = 10;

		$('.price ul li').hide();

		$.each(buttons, function(index, button){
			if($(button.selector).hasClass('active')) {
				$('.price ul li:contains(' + button.text + ')').show();
				price += button.price;
			}
		});

		$('.price strong').text('$' + price);
	}

	updatePrice();
});
