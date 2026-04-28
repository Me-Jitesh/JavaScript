function deBounce(fn, delay) {
  return function (...args) {
    clearTimeout(timerId); // Clear Last Call
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = (query) => {
  console.log("Searching For ", query);
};

const searchWithDebounce = deBounce(search, 1000);

search("H");
search("He");
search("Hel");
search("Hell");
search("Hello");
search("Hello Wo");
search("Hello Wor");
search("Hello Worl");
search("Hello World");
