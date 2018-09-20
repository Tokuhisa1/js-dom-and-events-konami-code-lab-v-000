const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  // Keep track of index outside of the event handler.
  let index = 0;

  // This is the function that would be invoked by the event listener.
  function onKeyDownHandler(e) {
    // Note that we're calling parseInt on the key value. This is because the
    // event handler might pass us the string representation of the number,
    // which wouldn't work so well with our comparisons.
    const key = parseInt(e.detail || e.which);
    // In modern browsers, e.which is usually sufficient; however, it's not
    // universally supported, it's technically deprecated, and it sometimes
    // exhibits finicky behavior in the test suite.
    console.log(key);
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }

  document.addEventListener('keydown', onKeyDownHandler);
}
