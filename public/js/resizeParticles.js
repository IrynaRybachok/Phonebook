function setParticlesHeight() {
  const vh = window.innerHeight;
  const el = document.getElementById("particles-js");
  if (el) {
    el.style.height = vh + "px";
    return true;
  }
  return false;
}

if (!setParticlesHeight()) {
  const observer = new MutationObserver(() => {
    if (setParticlesHeight()) {
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

window.addEventListener("resize", () => {
  const el = document.getElementById("particles-js");
  if (el) {
    el.style.height = window.innerHeight + "px";
  }
});
