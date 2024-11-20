const initialTiles = [
  {
    task: "Do laundry at 9pm",
  },
  {
    task: "Take the rubbish out",
  },
];

/*=============================================
=                  Elements                   =
=============================================*/
// how to modal
const howtoBtn = document.querySelector("#howto-button");
const howtoModal = document.querySelector("#howto-modal");
const howtoCloseBtn = document.querySelector("#howto-close");

// tile add button modal
const tileAddBtn = document.querySelector("#task-add-button");
const tileAddModal = document.querySelector("#add-task-modal");
const tileCloseBtn = document.querySelector("#task-edit-close");

/*=============================================
=                 Functions                   =
=============================================*/
function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

// function getCardElement(data) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImageElement = cardElement.querySelector(".card__image");
//   const cardTitleElement = cardElement.querySelector(".card__title");
//   cardImageElement.src = data.link;
//   cardImageElement.alt = data.name;
//   cardTitleElement.textContent = data.name;
//   return cardElement;
// }

// initialTiles.forEach((data) => {
//   const tileElement = getCardElement(data);
//   cardListElement.append(tileElement);
// });

/*=============================================
=              Event Handlers                 =
=============================================*/
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   profileTitle.textContent = profileTitleInput.value;
//   profileDescription.textContent = profileDescriptionInput.value;
//   closePopup();
// }

/*=============================================
=              Event Listeners                =
=============================================*/
howtoBtn.addEventListener("click", () => openPopup(howtoModal));
howtoCloseBtn.addEventListener("click", () => closePopup(howtoModal));

tileAddBtn.addEventListener("click", () => openPopup(tileAddModal));
tileCloseBtn.addEventListener("click", () => closePopup(tileAddModal));
