"use strict";

//Модальное окно меню по клике на меню-бургер
function burgerMenu() {
  $('span:nth-child(1)').toggleClass('first');
  $('span:nth-child(2)').toggleClass('second');
  $('span:nth-child(3)').toggleClass('third');
}

$('.header__menu-burger').click(function () {
  //Анимация бургер-меню
  $('span:nth-child(1)').toggleClass('first');
  $('span:nth-child(2)').toggleClass('second');
  $('span:nth-child(3)').toggleClass('third');
});
$('.header__menu-burger').click(function () {
  //Скрываем открываем по клику меню
  $('.popup-fade').fadeToggle();
});
$(document).ready(function ($) {
  // Клик по ссылке "Закрыть".
  $('.popup__head-close').click(function () {
    $(this).parents('.popup-fade').fadeOut();
    $('span:nth-child(1)').toggleClass('first');
    $('span:nth-child(2)').toggleClass('second');
    $('span:nth-child(3)').toggleClass('third');
    return false;
  }); // Закрытие по клавише Esc.

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade').fadeOut();
      $('span:nth-child(1)').toggleClass('first');
      $('span:nth-child(2)').toggleClass('second');
      $('span:nth-child(3)').toggleClass('third');
    }
  }); // Клик по фону, но не по окну.

  $('.popup-fade').click(function (e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();
      $('span:nth-child(1)').removeClass('first');
      $('span:nth-child(2)').removeClass('second');
      $('span:nth-child(3)').removeClass('third');
    }
  });
});
"use strict";

$(document).ready(function () {
  $('.slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '30px',
    autoplaySpeed: 2500,
    speed: 500,
    centerMode: true
  });
});

