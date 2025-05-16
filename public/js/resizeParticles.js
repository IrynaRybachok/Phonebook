function updateParticlesHeight() {
  const el = document.getElementById("particles-js");
  if (el) {
    el.style.height = window.innerHeight + "px";
  }
}

updateParticlesHeight();
window.addEventListener("resize", updateParticlesHeight);
window.addEventListener("orientationchange", updateParticlesHeight);
