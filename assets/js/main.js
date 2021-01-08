document.addEventListener( 'DOMContentLoaded', () => {

    ScrollFect.appearance( '.scrollfect', {
        animation: ScrollFect.animationStore.appearanceFade,
        duration: 0.75,
        gap: 100,
        params: {
            minScale: 0.85
        }
    } );

    ScrollFect.appearance( '.scrollfect-once', {
        animation: ScrollFect.animationStore.appearanceFade,
        duration: 0.75,
        gap: { top: 120, bottom: 80 },
        once: true,
        onVisible: false,
        params: {
            minScale: 0.85
        }
    } );

    ScrollFect.appearance( 'nav.header-nav.top', {
        animation: ScrollFect.animationStore.appearanceSlideTop,
        duration: 0.75,
        once: true,
        onVisible: false,
        params: {
            offsetTop: 25
        }
    } );

    $( window ).scroll( navChange );

    $( '#js-burger' ).click( function () {
        $( '.header-nav__menu' ).toggleClass( 'shown' );

        $( 'body' ).toggleClass( 'scroll-fix' );
    } );

    $( '.seat-block' ).click( function () {
        if ( !$( this ).hasClass( 'chosen' ) ) $( '.seat-block' ).each( function () {
            $( this ).removeClass( 'chosen' );
        } );

        $( this ).toggleClass( 'chosen' );
    } );

    $( '.js-booking' ).click( () => {
        location.href = '/booking.html';
    } );


    function navChange() {
        if ( window.pageYOffset > 70 )
            $( 'header.header nav.header-nav' ).removeClass( 'top' );
        else
            $( 'header.header nav.header-nav' ).addClass( 'top' );
    }

} );
