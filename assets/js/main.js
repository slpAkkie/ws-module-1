$( document ).ready( function() {

    $( window ).scroll( scrollfect );
    $( window ).scroll( navChange );
    $( window ).resize( scrollfect );
    scrollfect()

    $( '#js-burger' ).click( function() {
        $( '.header-nav__menu' ).toggleClass( 'shown' );

        $( 'body' ).toggleClass( 'scroll-fix' );
    } );


    function scrollfect() {
        $( '.scrollfect' ).each( function() {
            if (
                window.pageYOffset + 70 < this.offsetTop + $( this ).height()
                && window.pageYOffset + window.innerHeight > this.offsetTop
            ) $( this ).attr( 'scrollfect-shown', true );
            else if ( !$( this ).hasClass( 'scrollfect-once' ) ) $( this ).attr( 'scrollfect-shown', false );
        } );
    }

    $( '.seat-block' ).click( function() {
        if ( !$( this ).hasClass( 'chosen' ) ) $( '.seat-block' ).each( function() {
            $( this ).removeClass( 'chosen' );
        } );

        $( this ).toggleClass( 'chosen' );
    } );

    $( '.js-booking' ).click( () => {
        location.href = '/booking.html';
    } );


    function navChange() {
        if (window.pageYOffset > 70)
            $( 'header.header nav.header-nav' ).removeClass( 'top' );
        else
            $( 'header.header nav.header-nav' ).addClass( 'top' );
    }

} );