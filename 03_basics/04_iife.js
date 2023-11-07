// Immediately Invoked Function Expressions (IIFE)
// Because of global scope pollution we use IIFE

(function beer() {
  console.log(`DB Connected`);
})();

((name) => {
  console.log(`DB Connected TWO ${name}`);
})("Tesla");
