let timeout;

window.addEventListener("scroll", function () {
  clearTimeout(timeout);

  const movingHeader = document.getElementById("movingHeader");
  const fixHeader = document.getElementById("fixHeader");
  const scrollPosition = window.scrollY;

  timeout = setTimeout(() => {
    if (scrollPosition > 100) {
      movingHeader.style.visibility = "visible";
      movingHeader.style.opacity = "1";
      fixHeader.style.visibility = "hidden";
      fixHeader.style.opacity = "0";
    } else {
      movingHeader.style.visibility = "hidden";
      movingHeader.style.opacity = "0";
      fixHeader.style.visibility = "visible";
      fixHeader.style.opacity = "1";
    }
  }, 10);
});
