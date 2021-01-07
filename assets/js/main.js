/**
 * Общий файл скриптов на весь сайт
 */



$( document ).ready( function () {

  /** По нажатию на кнопку-бургер переключить видимость меню */
  $( '#js-burger' ).click( toggleNavMenu );

} );

/** Установим настройки */
ScrollFect.appearance( '.scrollfect', {
  animation: ScrollFect.animationStore.appearanceFade,
  duration: 0.75,
  params: {
    minScale: 0.85
  }
} );

ScrollFect.appearance( 'nav.header__nav', {
  animation: ScrollFect.animationStore.appearanceSlideTop,
  duration: 0.75,
  onVisible: false,
  params: {
    offsetTop: 25
  }
} );



/**
 *
 * =========================
 * Независимые функции
 * =========================
 *
 */



/**
 *
 * =========================
 * Опсание функций-обработчиков
 * =========================
 *
 */



/**
 * Переключение видимости навигационного меню
 * =========================
 */
function toggleNavMenu() {
  $( this ).toggleClass( 'active' );
  $( '.nav__menu' ).toggleClass( 'show' );

  $( 'body' ).toggleClass( 'scroll-fix' );
}
