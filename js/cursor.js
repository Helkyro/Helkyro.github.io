const cursor = document.querySelector(".cursor");
const border = document.querySelector(".cursor-border");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
  border.style.top = e.clientY + "px";
  border.style.left = e.clientX + "px";
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    border.style.width = "60px";
    border.style.height = "60px";
    border.style.borderColor = "#fff";
  });
  link.addEventListener("mouseleave", () => {
    border.style.width = "35px";
    border.style.height = "35px";
    border.style.borderColor = "rgba(255,255,255,0.5)";
  });
});
