console.clear();

function PcMenu__init() {
  const header = document.querySelector('header'); //헤더부분획득
  const headerheight = header.clientHeight;//헤더높이
document.addEventListener('scroll', onScroll, { passive: true });//스크롤 이벤트
 function onScroll () {
     const scrollposition = pageYOffset;//스크롤 위치
   const div = document.querySelector('.pc-top-bar > .pc_top_bar__bottom-wrap');//네비게이션
   if (headerheight < scrollposition){//만약 헤더높이<=스크롤위치라면
     div.classList.add('fixed')//fix클래스를 네비에 추가
   }
   else {//그 외의 경우
     div.classList.remove('fixed');//fix클래스를 네비에서 제거
   }
 } 
}

PcMenu__init();

function MoMenu__init() {
  const header = document.querySelector('header'); //헤더부분획득
  const headerheight = header.clientHeight;//헤더높이
document.addEventListener('scroll', onScroll, { passive: true });//스크롤 이벤트
 function onScroll () {
     const scrollposition = pageYOffset;//스크롤 위치
   const div = document.querySelector('.m-top-bar > .m_top_bar__bottom-wrap');//네비게이션
   if (headerheight < scrollposition){//만약 헤더높이<=스크롤위치라면
     div.classList.add('fixed')//fix클래스를 네비에 추가
   }
   else {//그 외의 경우
     div.classList.remove('fixed');//fix클래스를 네비에서 제거
   }
 } 
}

MoMenu__init();

function PcBannerSwiper__init() {
	const swiper = new Swiper('.pc_banner_contents .pc_banner_wrap .pc_banner_slides .swiper', {
		// Optional parameters
		loop: true,
		autoplay: true,

		// If we need pagination
		pagination: {
			el: '.pc_banner_slides .swiper-pagination',
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.pc_banner_slides .swiper-button-next',
			prevEl: '.pc_banner_slides .swiper-button-prev',
		},
	});
}

PcBannerSwiper__init();

function MbBannerSwiper__init() {
	const swiper = new Swiper('.mb_banner_contents .mb_banner_wrap .mb_banner_slides .swiper', {
		// Optional parameters
		loop: true,
		autoplay: true,
		centeredSlides: true,
	});
}

MbBannerSwiper__init();

function PcBestSwiper__init() {
	const swiper = new Swiper('.pc_bestitem .pc_bestitem_wrap .pc_bestitem_slides .swiper', {
		// Optional parameters
		loop: true,
		autoplay: true,
		slidesPerView: 4,
		spaceBetween: 20,

		// If we need pagination
		pagination: {
			el: '.pc_bestitem_slides .swiper-pagination',
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.pc_bestitem_slides .swiper-button-next',
			prevEl: '.pc_bestitem_slides .swiper-button-prev',
		},
	});
}

PcBestSwiper__init();

$(document).ready(function () {
	const $counters = $(".scroll_on");
	const exposurePercentage = 100;
	const loop = false;
	$(window)
		.on("scroll", function () {
			$counters.each(function () {
				const $el = $(this);
				const rect = $el[0].getBoundingClientRect();
				const winHeight = window.innerHeight;
				const contentHeight = rect.bottom - rect.top; 
				if (
					rect.top <= winHeight - (contentHeight * exposurePercentage) / 100 &&
					rect.bottom >= (contentHeight * exposurePercentage) / 100
				) {
					$el.addClass("active");
				}
				if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
					$el.removeClass("active");
				}
			});
		})
		.scroll();
});

function PcComitemSwiper__init() {
	const swiper = new Swiper(
		".pc_comitem .pc_comitem_wrap .pc_deomawrap .pc_deomaitem_slides .swiper",
		{
			// Optional parameters
			loop: true,
			loopedSlides: 1,
			autoplay: {
				delay: 3000
			},
			slidesPerView: 'auto',
			spaceBetween: 30,

			// Navigation arrows
			navigation: {
				nextEl: ".pc_deomaitem_slides .swiper-button-next",
				prevEl: ".pc_deomaitem_slides .swiper-button-prev"
			},
			breakpoints: {
				600: {
					slidesPerView: 3, //브라우저가 600보다 클 때
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 4, // 브라우저가 1024보다 클 때
					slidesPerGroup: 4,
					spaceBetween: 30,
				},
			},
		}
	);
}

PcComitemSwiper__init();

$(function() { // 보이기 | 숨기기
	$(window).scroll(function() {
    if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여짐니다. 
      $('.top_btn').fadeIn();
    } else {
      $('.top_btn').fadeOut();
    }
  }); // 버튼 클릭시 
  $("#topBtn").click(function() { 
  	$('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다. 
  	}, 400); // 속도 400 
  	return false; 
  }); 
});