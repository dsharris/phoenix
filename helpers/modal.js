/* MODAL */

function modal ( options ) {

  Modal.build ({
    origin: options.origin,
    weight: MODAL_WEIGHT,
    duration: MODAL_DURATION,
    animationDuration: MODAL_ANIMATION_DURATION,
    appearance: MODAL_APPEARANCE,
    text: _.isString ( options.text ) ? options.text : '',
    icon: _.isObject ( options.icon ) ? options.icon : undefined
  }).show ();

}

/* MODAL SCREEN */

function modalScreen ( options, screen = Screen.main () ) {

  const frame = screen.flippedFrame ();

  options.origin = function ( mFrame ) {
    return {
      x: frame.x + ( frame.width / 2 ) - ( mFrame.width / 2 ),
      y: ( frame.height / 2 ) - ( mFrame.height / 2 )
    };
  };

  modal ( options );

}