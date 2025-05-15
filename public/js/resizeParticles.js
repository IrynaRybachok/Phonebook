function resizeParticles() {
  const vh = window.innerHeight;
  const particles = document.getElementById("particles-js");
  if (particles) {
    particles.style.height = vh + "px";
  }
}

window.addEventListener("load", resizeParticles);
window.addEventListener("resize", resizeParticles);
