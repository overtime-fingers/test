$(function(){
	preLoad();
})

var preLoad = function(){
	//페이지 로드시 실행 함수

	// datepicker
	(function($){
		$.fn.datepicker.dates['ko'] = {
			days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
			daysShort: ["일", "월", "화", "수", "목", "금", "토", "일"],
			daysMin: ["일", "월", "화", "수", "목", "금", "토", "일"],
			months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
		};
	}(jQuery));
}

// tooltip
var tooltipShow = function(){
	$('[data-toggle="tooltip"]').each(function(){
		/*
			* nav 안에 툴팁이 있는경우 .tooltip 의 생성 위치를 .nav_tims 안으로
			* 2차오픈 후 if문 삭제하고 아래 코드로 대체
				$('[data-toggle="tooltip"]').tooltip();
		*/
		if ($(this).closest('.nav_tims').length > 0){
			$(this).tooltip({
				container: '.nav_tims',
				delay: {
					"show": 200,
					"hide": 100
				},
				// trigger: 'click'
			});
		} else {
			$(this).tooltip();
		}
	})
}