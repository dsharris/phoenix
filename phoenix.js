/* Configs */
require ( './config/phoenix.js' );
require ( './config/constants.js' );

/* Helpers */
require ( './helpers/anchor.js' );
require ( './helpers/frame.js' );
require ( './helpers/keys.js' );
require ( './helpers/modal.js' );
require ( './helpers/space.js' );
require ( './helpers/window.js' );

/* Shortcuts */
require ( './shortcuts/center.js' );
require ( './shortcuts/expand.js' );
require ( './shortcuts/focus.js' );
require ( './shortcuts/fullscreen.js' );
require ( './shortcuts/halves.js' );
require ( './shortcuts/reload.js' );
require ( './shortcuts/sides.js' );
require ( './shortcuts/sixths.js' );
require ( './shortcuts/spaces.js' );
require ( './shortcuts/thirds.js' );
require ( './shortcuts/splits.js' );

/* SYSTEM LOADED */

modalScreen ({ icon: App.get ( 'Phoenix' ).icon () });
