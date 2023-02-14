const toggleButton = document.getElementsByClassName("toggle-button")[0];
//since it returns an array we wanna get the first element which is the togglebutton

const navLinks = document.getElementsByClassName("nav-links")[0];
//select the main nav class

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
//add an eventlistener and say whenever this is clicked add the class active if its not already there and if there remove it

/************ MODAL */
