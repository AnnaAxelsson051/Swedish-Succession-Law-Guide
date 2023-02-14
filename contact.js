const openModalButtons = document.querySelectorAll("[data-modal-target]");

const closeModalButtons = document.querySelectorAll("[data-close-button]");

const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
//eventlistener för varje knapp lyssna efter klick
//med dataset kan vi komma åt alla dataset attributen som om de va js objekt (görs om till c-case) vi väljer modalen och sen kalla på openModal funktionen

//samma för close modal buttons

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});
//Komma åt den närmaste parent med klassenmodal

//klick på overlay stänger modalen:
overlay.addEventListener("click", () => {
  const modal = document.querySelector(".modal.active");
  closeModal(modal);
});

function openModal(modal) {
  if (modal == null) return;
  //iom ingen modal return
  modal.classList.add("active");
  //om det finns en modal lägga till active class
  overlay.classList.add("active");
  //samma för overlay
}

//ta bort active class när man vill stänga modal:
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
