// Passing Rest parameter at last
function test(a, b, ...c) {
  console.log(test);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(...c);
}
test(10, 20, 30, 40);
// ==========================================================

// Rest parameter at first
// sp&rp.js:11 Uncaught SyntaxError: Rest parameter must be last formal parameter (at sp&rp.js:11:20)
// function test1(...c,a, b,) {
//   console.log(test1);
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// test(10, 20, 30, 40);
