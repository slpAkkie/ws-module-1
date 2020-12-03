/**
 * Общий файл скриптов на весь сайт
 */



$( document ).ready( function () {

  /** По нажатию на кнопку-бургер переключить видимость меню */
  $( '#js-burger' ).click( toggleNavMenu );

} );



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
