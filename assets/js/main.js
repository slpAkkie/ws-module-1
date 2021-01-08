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
