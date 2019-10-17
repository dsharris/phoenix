/* CENTER WINDOW */

function center_window ( window ) {

  const screen = window.screen (),
        sFrame = screen.frame (),
        wFrame = window.frame ();

  window.setFrame ({
    x: sFrame.x + ( sFrame.width / 2 ) - ( wFrame.width / 2 ),
    y: Math.max ( 0, sFrame.y ) + ( sFrame.height / 2 ) - ( wFrame.height / 2 ),
    width: wFrame.width,
    height: wFrame.height
  });

}

/* FIND WINDOW */

function findWindow ( windows = Window.all (), name = false, isNameOptional = false, title = false, titleBlacklist = false ) {

  let fallback;

  for ( let i = 0, l = windows.length; i < l; i++ ) {

    const window = windows[i],
          windowTitle = window.title ();

    if ( !windowTitle ) continue; // Not a normal window

    const titleOK = !title || ( title.test ( windowTitle ) && ( !titleBlacklist || !titleBlacklist.test ( windowTitle ) ) );

    if ( !titleOK ) continue;

    const nameOK = !name || ( window.app ().name () === name );

    if ( nameOK ) return window;

    if ( isNameOptional ) fallback = window;

  }

  return fallback;

}

/* FOCUS WINDOW */

function focusWindow ( name = false, isNameOptional = false, title = false, titleBlacklist = false, launch = true, callback = _.noop ) {

  const window = findWindow ( Window.all(), name, isNameOptional, title, titleBlacklist );

  if ( window ) {
    window.unminimise ()
    window.focus ();
  }
}