_5grid.ready(function() {

	// Desktop-only
		if (_5grid.isDesktop)
		{
			// Vertically center
				var wh = $(window).height(), w = $('#wrapper');
				
				//if (_5grid.is1200px && wh > 800)
				//	w.css('top', '50%').css('margin-top', '-345px');
				//else if (_5grid.is1000px && wh > 700)
				//	w.css('top', '50%').css('margin-top', '-310px');

				w.show();
		
			// Slider
				$('#main').slidertron({
					viewerSelector:			'.viewer',
					reelSelector:			'.viewer .reel',
					slidesSelector:			'.viewer .reel .slide',
					navNextSelector:		'.next',
					navPreviousSelector:	'.previous',
					viewerOffset:			(_5grid.is1200px ? 102 : 92),
					jumpLinksSelector:		'.jumplink',
					hashJump:				true,
					speed:					1000,
					fadeInSpeed:			1000,
					arrowsToNav:			false,
					onSlideSwitch:			function(slide) {
						$('#main .inner').scrollTop(0);
						var x = $('body').scrollTop();
						slide.find('.inner').focus();
						$('body').scrollTop(x);
					}
				});
				
				$('#main .viewer .reel').accelerate_5grid();

			// Scrollbars
				$('article').each(function() {
					var t = $(this), ti = t.find('.inner');
					ti.niceScroll({
						body:		t,
						zindex:		2
					});
				});

			// Tab key fix
				$('form').keydown(function(e) { if (e.keyCode == 9) e.stopPropagation(); });
				$(document).keydown(function(e) { if (e.keyCode == 9) e.preventDefault(); });
		}

	// Gallery
		$('.gallery').poptrox(
			_5grid.isMobile ?
			{
				usePopupCaption: false,
				usePopupCloser: false,
				useBodyOverflow: false,
				windowMargin: 0,
				popupPadding: 5,
				overlayOpacity: 0.9,
				fadeSpeed: 0,
				popupWidth: 0,
				popupHeight: 0
			}
			:
			{
				usePopupCaption: true,
				usePopupCloser: true
			}
		);

}, true);