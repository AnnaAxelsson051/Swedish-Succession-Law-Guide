const toggleButton = document.getElementsByClassName("toggle-button")[0];
//since it returns an array we wanna get the first element which is the togglebutton

const navLinks = document.getElementsByClassName("nav-links")[0];
//select the main nav class

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
//add an eventlistener and say whenever this is clicked add the class active if its not already there and if there remove it

//CAROUSEL CODE

const buttons = document.querySelectorAll("[data-carousel-button]");
//data-carousel-button is a data attribute that is selected here

buttons.forEach((button) => {
  //loop tru the buttons
  button.addEventListener("click", () => {
    //add eventlistener that listens for a click and swaps images
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    //if user clicks "next" we return 1 otherwise -1, so we go to the next or the previous depending on the text(next eller prev)
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    //from the button we wanna get the closest parent element that is a carousel so we say data-carousel

    const activeSlide = slides.querySelector("[data-active]");
    //get the active slide
    //för att det altid börjar på den?
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    //convert the slides to an array, the children of them, mha ...slides
    //then get the index of the active slide in that array
    //then add in the offset which is 1 or -1 (ovanför)
    if (newIndex < 0) newIndex = slides.children.length - 1;
    //ifs för att göra slidesen till en cirkel
    //om new index är mindre än 0 dvs om vi går bakåt förbi vår första image vill vi gå till den sista som är index -1
    if (newIndex >= slides.children.length) newIndex = 0;
    //if new index is större än eller lika med längden av slidesen så har vi passerat den sista sliden och ska loopa tillbaka och starta på första

    slides.children[newIndex].dataset.active = true;
    //sen tar vi den på new index och sätter dataset.active till true
    //dvs lägger till dataset active class eller attribute till vår nuvarande active slide och den nedanför tar bort den from the active slide that was active before
    delete activeSlide.dataset.active;
    //sen anv delete för att radera den active dataset from vår nuvarande active slide
  });
});
