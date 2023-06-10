const concat = require("concat");
(async function build() {
  const files = [
    "./dist/micro-frontend-1/runtime.js",
    "./dist/micro-frontend-1/polyfills.js",
    "./dist/micro-frontend-1/main.js",
  ];
  await concat(files, "./dist/micro-frontend-1/micro-frontend-1.js");
})();
