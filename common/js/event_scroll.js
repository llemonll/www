
(function ($){
	var
		  ns		= (new Date).getTime()
		, special	= $.event.special
		, dispatch	= $.event.handle || $.event.dispatch

		, scroll		= 'scroll'
		, scrollStart	= scroll + 'start'
		, scrollEnd		= scroll + 'end'
		, nsScrollStart	= scroll +'.'+ scrollStart + ns
		, nsScrollEnd	= scroll +'.'+ scrollEnd + ns
	;

	special.scrollstart = {
		setup: function (){
			var pid, handler = function (evt/**$.Event*/){
				if( pid == null ){
					evt.type = scrollStart;
					dispatch.apply(this, arguments);
				}
				else {
					clearTimeout(pid);
				}

				pid = setTimeout(function(){
					pid = null;
				}, special.scrollend.delay);

			};

			$(this).bind(nsScrollStart, handler);
		},

		teardown: function (){
			$(this).unbind(nsScrollStart);
		}
	};

	special.scrollend = {
		delay: 300,

		setup: function (){
			var pid, handler = function (evt/**$.Event*/){
				var _this = this, args = arguments;

				clearTimeout(pid);
				pid = setTimeout(function(){
					evt.type = scrollEnd;
					dispatch.apply(_this, args);
				}, special.scrollend.delay);

			};

			$(this).bind(nsScrollEnd, handler);

		},

		teardown: function (){
			$(this).unbind(nsScrollEnd);
		}
	};


	$.isScrolled = false;
	$(window).bind(scrollStart+' '+scrollEnd, function (evt/**Event*/){
		$.isScrolled = (evt.type == scrollStart);
		$('body')[$.isScrolled ? 'addClass' : 'removeClass']('is-scrolled');
	});
})($);

$(function ($) {

	$(window).bind('scrollstart scrollend', function (evt) {
		if (evt.type == 'scrollstart') {
			$(".topMove").fadeOut("fast");
		}
		if (evt.type == 'scrollend') {
			$(".topMove").fadeIn("slow");
		}
	});

});

$('.topMove').click(function (e) {
	e.preventDefault();
	//상단으로 스르륵 이동합니다.
	$("html,body").stop().animate({
		"scrollTop": 0
	}, 1000); // 스크롤의 위치를 이동시킨다
});
