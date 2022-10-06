// Note: this is an invalid import. Though the import map references "react", there is no trailing
// slash match. Also spacing it a bit to ensure lineno/colno should be > 0.
/**   */import Thing from 'react/foo';

console.log(Thing);