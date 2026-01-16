(function () {
  function helloFromLibrary(name) {
    const message = `Hello ${name}, library is running`;
    console.log(message);
    return message;
  }

  // export do globálního scope
  if (typeof window !== "undefined") {
    window.TabidooUtils = {
      helloFromLibrary,
    };
  } else {
    console.log("TabidooUtils loaded outside browser");
  }
})();

