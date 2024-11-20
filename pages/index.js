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

// task add button modal
const taskAddBtn = document.querySelector("#task-add-button");
const taskAddModal = document.querySelector("#add-task-modal");
const taskCloseBtn = document.querySelector("#task-edit-close");

// task save button
const taskAddForm = taskAddModal.querySelector(".modal__form");
const tileList = document.querySelector(".tile__list");
const tileTemplate = document.querySelector("#tile-template").content;

/*=============================================
=                 Functions                   =
=============================================*/
// open and close modals
function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

// create task tile
function createTile(task) {
  const newTile = tileTemplate.cloneNode(true);
  newTile.querySelector(".tile__description").textContent = task;
  return newTile;
}

function renderTile(task) {
  const tileElement = createTile(task);
  tileList.appendChild(tileElement);
}

function taskSubmit(evt) {
  evt.preventDefault();
  const taskInput = taskAddForm.querySelector("#modal-tile-input");
  const taskValue = taskInput.value.trim();

  if (taskValue) {
    renderTile(taskValue); // add the new tile
    taskInput.value = ""; // clear the input field
    closePopup(taskAddModal); // close the modal
  }
}

/*=============================================
=           Initial Tile Rendering            =
=============================================*/
initialTiles.forEach((tile) => renderTile(tile.task));

/*=============================================
=              Event Listeners                =
=============================================*/
howtoBtn.addEventListener("click", () => openPopup(howtoModal));
howtoCloseBtn.addEventListener("click", () => closePopup(howtoModal));

taskAddBtn.addEventListener("click", () => openPopup(taskAddModal));
taskCloseBtn.addEventListener("click", () => closePopup(taskAddModal));

taskAddForm.addEventListener("submit", taskSubmit);
