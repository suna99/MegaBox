// 배너 이미지 슬라이드
const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  autoplay: {
    delay: 5000,
  },
});

// 영화차트 탭메뉴
let movBtn = $(".movie_title > ul > li");
let movCont = $(".movie_chart .chart_cont");

movCont.hide().eq(0).show();

movBtn.click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  movBtn.removeClass("active");
  target.addClass("active");
  movCont.css("display", "none");
  movCont.eq(index).css("display", "flex");
});

// 영화차트 이미지 슬라이드
const swiper2 = new Swiper('.swiper-container2', {
  slidesPerView: 4,
  spaceBetween: 24,
  mousewheel: {
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 6000,
  },
  breakpoints: {
    600: {
      slidesPerView: 1.4,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

// 공지사항
let noticeBtn = $(".notice > ul > li");
let noticeCont = $(".notice > ul > li > ul");

noticeCont.hide().eq(0).show();

noticeBtn.click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  noticeBtn.removeClass("active");
  target.addClass("active");
  noticeCont.css("display", "none");
  noticeCont.eq(index).css("display", "block");
});