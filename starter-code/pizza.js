// Write your Pizza Builder JavaScript in this file.

$(function(){
	$('.btn-crust, .btn-sauce').removeClass('active');

	$('.crust').removeClass('crust-gluten-free');
	$('.sauce').removeClass('sauce-white');

	$('.btn-pepperonni').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.pep').toggle();

		updatePrice();
	});

	$('.btn-mushrooms').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.mushroom').toggle();

		updatePrice();
	});

	$('.btn-green-peppers').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.green-pepper').toggle();

		updatePrice();
	});

	$('.btn-sauce').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.sauce').toggleClass('sauce-white');

		updatePrice();
	});

	$('.btn-crust').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.crust').toggleClass('crust-gluten-free');

		updatePrice();
	});

	function updatePrice() {
		var price = 10;

		$('.price ul li').each(function(){
			if($(this).text().includes('pepperonni')) {
				$(this).hide();
				if($('.btn-pepperonni').hasClass('active')) {
					$(this).show();
					price += 1;
				}
			}

			if($(this).text().includes('mushrooms')) {
				$(this).hide();
				if($('.btn-mushrooms').hasClass('active')) {
					$(this).show();
					price += 1;
				}
			}

			if($(this).text().includes('green peppers')) {
				$(this).hide();
				if($('.btn-green-peppers').hasClass('active')) {
					$(this).show();
					price += 1;
				}
			}

			if($(this).text().includes('white sauce')) {
				$(this).hide();
				if($('.btn-sauce').hasClass('active')) {
					$(this).show();
					price += 3;
				}
			}

			if($(this).text().includes('gluten-free')) {
				$(this).hide();
				if($('.btn-crust').hasClass('active')) {
					$(this).show();
					price += 5;
				}
			}
		});

		$('.price strong').text('$' + price);
	}

	updatePrice();
});
