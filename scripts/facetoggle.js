//facetoggle.js

$(document).ready(function(){
	$('.pulsespace').fadeOut(333, function(){
		$('.pulse').fadeIn(500, function(){
			$('.pulse').fadeOut(833, function(){
				$('.pulsespace').fadeIn(500, function(){
					$('.pitchspace').fadeOut(100, function(){
						$('.pitching').fadeIn(1200);
					});
				});
			});
		})
	})
	$('#top').on('click', function(){
			$('body,html').animate({
				scrollTop: 0
			}, 667);
			return false;
		});

	$('#gamify').fadeIn(1500);
	})
