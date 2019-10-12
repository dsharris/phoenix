/* SET KEY HANDLER */

function setKeyHandler ( key, modifier, handler, handlerArgs = [], skipRepetitions = true, one = false ) {

  Key[one ? 'once' : 'on']( key, modifier, ( identifier, repeated ) => {

    if ( repeated && skipRepetitions ) return;

    handler ( ...handlerArgs );

  });

}

/* SET KEYS HANDLER */

function setKeysHandler ( handler, datas, skipRepetitions = true, one = false ) {

  datas.forEach ( data => {

    const [key, modifier, handlerArgs] = data;

    setKeyHandler ( key, modifier, handler, handlerArgs || [], skipRepetitions, one );

  });

}