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

} )
