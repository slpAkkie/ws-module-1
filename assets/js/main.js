/**
 * Общий файл скриптов на весь сайт
 */



$( document ).ready( function () {

  $( '#js-burger' ).click( toggleNavMenu );

} );



/**
 * Опсание функций-обработчиков
 */

function toggleNavMenu() {
  $( this ).toggleClass( 'active' );
  $( '.nav__menu' ).toggleClass( 'show' );

  $( 'body' ).toggleClass( 'scroll-fix' );
}
