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
const tileAddBtn = document.querySelector("#item-add-button");
const tileAddModal = document.querySelector("#add-tile-modal");
const tileCloseBtn = document.querySelector("#tile-edit-close");

/*=============================================
=                 Functions                   =
=============================================*/
function fillTileForm() {
  tileAddModal.classList.add("modal_opened");
}

function closePopup() {
  tileAddModal.classList.remove("modal_opened");
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
tileAddBtn.addEventListener("click", fillTileForm);
tileCloseBtn.addEventListener("click", closePopup);
// profileEditForm.addEventListener("submit", handleProfileFormSubmit);
