# If
A chainabale if library for JavaScript.

This is totally pointless, but I prefur chain syntax over control-structure syntax.

### Example
```js
const If = require('./index');

const myVar = (1 === 1);

const result = new If(myVar)
    .then(() => ('True'))
    .elseif((1 === 0), () => ('elesif 1'))
    .else(() => ('False'))
    .do();

console.log(result);
```

### Translation (control-structure syntax)
```js
const myVar = (1 === 1);

if (myVar) {
    console.log('True');
} else if (1 === 0) {
    console.log('elesif 1');
} else {
    console.log('False');
}
```
