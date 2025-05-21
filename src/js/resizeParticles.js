function updateParticlesHeight() {
  const el = document.getElementById("particles-js");
  if (el) {
    el.style.height = window.innerHeight + "px";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateParticlesHeight();

  //Повторить через малую задержку (для моб. браузеров)
  setTimeout(updateParticlesHeight, 100);
  setTimeout(updateParticlesHeight, 300);

  //Ещё один вызов после кадра (максимальная точность)
  requestAnimationFrame(updateParticlesHeight);
});

// Обновление при изменении размера
window.addEventListener("resize", updateParticlesHeight);
window.addEventListener("orientationchange", updateParticlesHeight);
