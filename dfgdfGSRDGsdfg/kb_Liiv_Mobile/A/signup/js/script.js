let step = 0;

$('.left').on('click', function () {
  $('.menu').removeClass('on');
  if (!$('.menu').hasClass('on')) {
    if (step === 0) {
      $('.signup').removeClass('off');
      $('.header').removeClass('off');
      $('.liiv').removeClass('on');
      $('.liiv_footer').removeClass('on');
      // signup_process2 off
    }
    else if (step === 1) {
      $('.signup_process').removeClass('on');
      $('.liiv').addClass('on');
      step = 0;
      // signup_process2 off
    } else if (step === 2) {
      $('.signup1').removeClass('off');
      $('.signup2').removeClass('on');
      $('.signup1 .next_on_online').removeClass('on');
      $('.signup1 .next_button').removeClass('off');
      step = 1;
      // signup_process3 off
    } else if (step === 3) {
      $('.signup2').addClass('on');
      $('.signup3').removeClass('on');
      $('.signup2 .next_on_online').removeClass('on');
      $('.signup2 .next_button').removeClass('off');
      step = 2;
      // signup_process4 off
    } else if (step === 4) {
      $('.signup3').addClass('on');
      $('.signup4').removeClass('on');
      step = 3;
    }  else if (step === 5) {
      $('.signup4').addClass('on');
      $('.last').removeClass('on');
      step = 4;
    }
  }
  console.log(step);
})

$('.right').on('click', function () {
  $('.menu').removeClass('on');
  if (!$('.menu').hasClass('on')) {
    // signup on
    if (step === 0) {
      $('.splash').addClass('on');
      $('.signup').addClass('off');
      $('.header').addClass('off');
      $('.splash_svg').addClass('on');
      setTimeout(() => {
        $('.splash').removeClass('on');
      }, 3000);
      setTimeout(() => {
        $('.liiv').addClass('on');
        $('.liiv_footer').addClass('on');
      }, 3000);
      step = 1;
    }
    // signup_process1 on
    if ($('.liiv_footer').hasClass('on')) {
      if (step === 1) {
        $('.signup_process').addClass('on');
        $('.liiv').removeClass('on');
        step = 2;
        // signup_process2 on
      } else if (step === 2) {
        $('.signup1').addClass('off');
        $('.signup2').addClass('on');
        $('.signup1 .next_on_online').removeClass('on');
        $('.signup1 .next_button').removeClass('off');
        step = 3;
        // signup_process3 on
      } else if (step === 3) {
        $('.signup2').removeClass('on');
        $('.signup3').addClass('on');
        $('.signup2 .next_on_online').removeClass('on');
        $('.signup2 .next_button').removeClass('off');
        step = 4;
        // signup_process4 on
      } else if (step === 4) {
        $('.signup3').removeClass('on');
        $('.signup4').addClass('on');
        step = 5;
      } else if (step === 5) {
        $('.signup4').removeClass('on');
        $('.last').addClass('on');
      }
    }
  }
  console.log(step);
})

$('.signup').on('click', function () {
  $('.splash').addClass('on');
  $('.signup').addClass('off');
  $('.header').addClass('off');
  $('.splash_svg').addClass('on');
  setTimeout(() => {
    $('.splash').removeClass('on');
  }, 3000);
  setTimeout(() => {
    $('.liiv').addClass('on');
    $('.liiv_footer').addClass('on');
  }, 3000);
  step = 1;
})

$('.liiv .button-container').on('click', function () {
  $('.signup_process').addClass('on');
  $('.liiv').removeClass('on');
  step = 1;
})

$('.star').on('click', function () {
  $('.signup').removeClass('off');
  $('.header').removeClass('off');
  $('.liiv').removeClass('on');
  $('.liiv_footer').removeClass('on');
  step = 0;
})

$('.more').on('click', function () {
  $('.menu').addClass('on');
  $('.liiv').removeClass('on');
})

$('.close').on('click', function () {
  $('.menu').removeClass('on');
  $('.liiv').addClass('on');
})

$('.chatImg').on('click', function () {
  $('.chat_text').addClass('on');
  setTimeout(() => {
    $('.chat_text').removeClass('on');
  }, 1000);
})

$('.signup4 .button-container .button').on('click', function () {
  $(this).toggleClass('on');
  $('.footer').toggleClass('on');
})

$('.input ul li').on('click', function () {
  if (!$('.signup1').hasClass('off')) {
    $(this).toggleClass('on');
    if ($(`.signup1 .input ul li:nth-child(1)`).hasClass('on') && $(`.signup1 .input ul li:nth-child(2)`).hasClass('on') && $(`.signup1 .input ul li:nth-child(3)`).hasClass('on')) {
      $('.signup1 .next_on_online').addClass('on');
      $('.signup1 .next_button').addClass('off');
    } else {
      $('.next_on_online').removeClass('on');
      $('.next_button').removeClass('off');
    }
  }
  if ($('.signup2').hasClass('on')) {
    var signup2List = document.querySelectorAll('.signup2 ul li');
    signup2List = Array.prototype.slice.call(signup2List);
    for (var i = 0; i < signup2List.length; i++) {
      if (signup2List[i].classList.contains('on')) {
        signup2List[i].classList.remove('on');
      }
    }
    $(this).addClass('on');
    if ($(`.signup2 .input ul li`).hasClass('on')) {
      $('.signup2 .next_on_online').addClass('on');
      $('.signup2 .next_button').addClass('off');
    }
    else {
      $('.next_on_online').removeClass('on');
      $('.next_button').removeClass('off');
    }
  }
  if ($('.signup3').hasClass('on')) {
    var signup3List = document.querySelectorAll('.signup3 ul li');
    signup3List = Array.prototype.slice.call(signup3List);
    for (var i = 0; i < signup3List.length; i++) {
      if (signup3List[i].classList.contains('on')) {
        signup3List[i].classList.remove('on');
      }
    }
    $(this).addClass('on');
    if ($(`.signup3 .input ul li`).hasClass('on')) {
      $('.signup3 .next_on_online').addClass('on');
      $('.signup3 .next_button').addClass('off');
    }
    else {
      $('.next_on_online').removeClass('on');
      $('.next_button').removeClass('off');
    }
  }
})

$('.signup1 .next_on_online').on('click', function () {
  $('.signup1').addClass('off');
  $('.signup2').addClass('on');
  $('.signup1 .next_on_online').removeClass('on');
  $('.signup1 .next_button').removeClass('off');
  step = 2;
})
$('.signup2 .next_on_online').on('click', function () {
  $('.signup2').removeClass('on');
  $('.signup3').addClass('on');
  $('.signup2 .next_on_online').removeClass('on');
  $('.signup2 .next_button').removeClass('off');
  step = 3;
})
$('.signup3 .next_on_online').on('click', function () {
  $('.signup3').removeClass('on');
  $('.signup4').addClass('on');
  step = 4;
})

var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    running: true,
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 36,
  centeredSlides: true,
  pagination: {   // 페이저 버튼 사용자 설정
    el: '.pagination',  // 페이저 버튼을 담을 태그 설정
    clickable: true,  // 버튼 클릭 여부
    type: 'bullets', // 버튼 모양 결정 "bullets", "fraction" 
    renderBullet: function (index, className) {  // className이 기본값이 들어가게 필수 설정
      return '<a href="#" class="' + className + '">' + '</a>'
    },
    renderFraction: function (currentClass, totalClass) { // type이 fraction일 때 사용
      return '<span class="' + currentClass + '"></span>' + '<span class="' + totalClass + '"></span>';
    }
  },
})

var mySwiper2 = new Swiper('.slide-container', {
  autoplay: {
    running: true,
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 15,
  centeredSlides: true,
})