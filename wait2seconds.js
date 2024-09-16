// Write JavaScript code using the setTimeout function to print 3 lines asynchronously. Use anonymous functions in your
// setTimeout calls. The output should do the following:
// 1. Wait 2 seconds
// 2. Print out “First task done!”
// 3. Wait another 2 seconds
// 4. Print out “Second task done!”
// 5. Wait another 2 seconds
// 6. Print out “Third task done!”
// setTimeout(function() {
// console.log('First task done!');
// }, 2000);

// console.log('Second task done!');
// (use this code as a starting point)

setTimeout(function() {
console.log('First task done!');
}, 2000);
setTimeout(function() {
  console.log('Second task done!');
}, 4000);
setTimeout(function() {
  console.log('Thrid task done!');
}, 6000);


// Another way 

setTimeout(function() {
  console.log('First task done!');
  setTimeout(function() {
    console.log('Second task done!');
    setTimeout(function() {
      console.log('Third task done!');
    }, 2000);
  }, 2000);  
}, 2000);

// async function exectuteTasks() {
//   await 
  
// }