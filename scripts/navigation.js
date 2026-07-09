const navButton = document.querySelector("#ham-bt");
const navBar = document.querySelector('#nav-list');

navButton.addEventListener("click", () => {
 
  navBar.classList.toggle("show");
  navButton.classList.toggle("show");
});

