const menu  = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
menu.addEventListener("click", function() {
  sidebar.classList.toggle("mobile")
})
