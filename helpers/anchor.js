/* GET NAMED ANCHOR */

function getNamedAnchor ( name ) {

  switch ( name ) {
    /* SIDES */
    case 'top': return [false, 0];
    case 'right': return [1, false];
    case 'bottom': return [false, 1];
    case 'left': return [0, false];
    /* CORNERS */
    case 'top-left': return [0, 0];
    case 'top-right': return [1, 0];
    case 'bottom-right': return [1, 1];
    case 'bottom-left': return [0, 1];
    /* HALVES */
    case 'half-1': return [0, false];
    case 'half-2': return [1, false];
    /* THIRDS */
    case 'third-1': return [0, false];
    case 'third-2': return [false, false];
    case 'third-3': return [1, false];
    /* SIXTHS */
    case 'sixths-1': return [0, 0];
    case 'sixths-2': return [false, 0];
    case 'sixths-3': return [1, 0];
    case 'sixths-4': return [0, 1];
    case 'sixths-5': return [false, 1];
    case 'sixths-6': return [1, 1];
    /* DEFAULT */
    default: throw new Error ( `Undefined anchor named: "${name}"` );
  }

}

/* SET ANCHOR */

function setAnchor ( x, y, window = Window.focused () ) {

  if ( _.isString ( x ) ) return setAnchor ( ...getNamedAnchor ( x ), y || window );

  if ( !window ) return;

  if ( x === false && y === false ) return;

  const screen = window.screen (),
        frame = screen.flippedFrame (),
        wFrame = window.frame ();

  const nextFrame = {
    x: x === 0 ? 0 : ( x === 1 ? frame.width - wFrame.width : wFrame.x ),
    y: y === 0 ? 0 : ( y === 1 ? frame.height - wFrame.height : wFrame.y ),
    width: wFrame.width,
    height: wFrame.height
  };

  if ( _.isEqual ( frame, nextFrame ) ) return;

  window.setFrame ( nextFrame );

}