window.addEventListener("load", () => {
  setTimeout(() => {
    const vh = window.innerHeight;
    const el = document.getElementById("particles-js");
    if (el) {
      el.style.height = vh + "px";
    } else {
      console.warn("#particles-js не найден!");
    }
  }, 300); // Подождать 300 мс
});
