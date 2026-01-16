(function () {
  function init(doo) {
    console.log("model id:", doo?.model?.id);
  }

  function helloFromLibrary(name) {
    const message = `Hello ${name}, library is running`;
    console.log(message);
    return message;
  }

  if (typeof window !== "undefined") {
    window.TabidooUtils = { init, helloFromLibrary };
  }
})();


