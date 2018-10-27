//  ==============================================
//      Some awesome console hacks 
//  ==============================================

/*
* Some Rules for contribution: 
*   1. Add comment as well when you add a new hack
*   2. Keep the code clean and concise
*   3. Maintain and group the hacks if any 
*/

// posting rules in console as well
const Rules = `/*
* Some Rules for contribution: 
*   1. Add comment as well when you add a new hack
*   2. Keep the code clean and concise
*   3. Maintain and group the hacks if any 
*/`

console.log(Rules);
console.log('===================== HACKS =====================');


// Printing objects with object name in logs
const foo = { name: 'tom', age: '20', available: 'yes'}
const bar = { name: 'dick', age: '23', available: 'no'}
const baz = { name: 'harry', age: '26', available: 'no'}

console.log({foo, bar, baz});


// Printing the above objects with some cool heading 
console.log('%c Objects with name', 'color:  blue');
console.log({foo, bar, baz});

// Printing in table format 
console.log('%c Awesome table format', 'color: green;font-weight: bold');
console.table({foo, bar, baz});

// Grouping simiar console logs 
console.group('[Group logs]');
console.log(foo);
console.log(bar);
console.log(baz);
console.groupEnd();

// Using time to track loop
console.time('100-elements');
for(let i=0; i<100; i++){}
console.timeEnd('100-elements');

// Using console tracing
console.trace('What\'s a trace?');

// Putting warning logs  
console.warn('It\'s a warning, please beware');

// Puttings errors in console
console.error('Looks likes you did somehing wrong :(');

// Some random and bigger text 
console.log('%c Dude! this looks awesome till now', 'color: red; font-size: 40px');

// View head sizes; This is a property and not a function!
console.memory

// Access value of the last console operation
$_
