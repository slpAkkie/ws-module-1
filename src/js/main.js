$( () => {

  // Плавное превращение навигационной панели при скролле
  $( window ).on( 'scroll', ( e ) => {
    if ( pageYOffset > 50 ) {
      $( 'header.site-header nav' ).removeClass( 'top' );
      $( 'header.site-header nav' ).addClass( 'scroll' );
    }
    else {
      $( 'header.site-header nav' ).removeClass( 'scroll' );
      $( 'header.site-header nav' ).addClass( 'top' );
    }
  } )

  // Сокрытие по нажатия кнопки пассажира
  $( '.passenger > .heading' ).on( 'click', function () {
    $( $( this ).parent() ).toggleClass( 'hidden' );
  } )

  // Отправка формы
  $( 'section.search form' ).on( 'submit', () => {
    location.href = 'search.html';
  } )

  // Добавление в бронирование
  $( '.flight-card input[type=button]' ).on( 'click', () => {
    location.href = 'booking.html';
  } )

} )
