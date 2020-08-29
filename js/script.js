$(document).ready(() => {
	$(document).on('keydown', event => {
		switch (event.keyCode) {
			case 37:
				move('is-left');
			break;
			case 38:
				move('is-top');
			break;
			case 39:
				move('is-right');
			break;
			case 40:
				move('is-bottom');
			break;
		}
	});

	$(document).on('keyup', () => {
		stopHightlight('top');
		stopHightlight('bottom');
		stopHightlight('left');
		stopHightlight('right');
	});

	var move = direction => {
		var range = 50;
		var koala = $('#koala');
		var koalaLeftPosition = $('#koala').position().left;
		var koalaTopPosition = $('#koala').position().top;

		switch (direction) {
			case 'is-left':
				startHightlight('left');
				koala.animate({left: koalaLeftPosition - range});
			break;
			case 'is-right':
				startHightlight('right');
				koala.animate({left: koalaLeftPosition + range});
			break;
			case 'is-top':
				startHightlight('top');
				koala.animate({top: koalaTopPosition - range});
			break;
			case 'is-bottom':
				startHightlight('bottom');
				koala.animate({top: koalaTopPosition + range});
			break;
		}
	}

	var startHightlight = pos => {
		$('.is-'+ pos +'').addClass('border-'+ pos +'-active');
	}

	var stopHightlight = pos => {
		$('.is-' + pos).removeClass('border-'+ pos +'-active');
	}
});