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

// Use multiple styles in a single console line -- or reset style
console.log('%cWarning %cToo much red text!', 'color: red; font-weight:bold', '');

// Printing in table format 
console.log('%c Awesome table format', 'color: green;font-weight: bold');
console.table({foo, bar, baz});

// Grouping similar console logs 
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

// Using console to print an image
console.log('%c' + 'Hello Console!', '\
font-size: 3em; \
background: red url("http://i1344.photobucket.com/albums/p642/pacman8myghosts/48straighthoursofvidya_zps7fd7c587.gif") no-repeat center center; \
background-size: 110% 110%; \
font-weight: bold; \
color: white; \
text-shadow: 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black; \
padding: 1% 4% 35%; \
border: .1em solid rgba(0,0,0,.4); \
border-radius: 1em; \
margin-left: 10%; \
');

// Some random and bigger text 
console.log('%c Dude! this looks awesome till now', 'color: red; font-size: 40px');

// View head sizes; This is a property and not a function!
console.memory

// Count logs by occurrence
console.count("This was called so many times")
console.count("This was called so many times")

// Assert a condition as error
console.assert(false, "This is an error!")

