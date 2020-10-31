var ideas = [];

var saveButton = document.querySelector('.save-card');
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body');
var savedIdeasSection = document.querySelector(".idea-cards");


saveButton.addEventListener('click', displayCard);
titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);
savedIdeasSection.addEventListener('click', runningMethodsOnCardButtons);

function runningMethodsOnCardButtons(event) {
  if (event.target.className === "delete") {
    removeCard();
  }
  else if (event.target.className === "star" || event.target.className === "star-active") {
    favoriteCard();
  }
};

function toggleFavoriteOnAndOff (on, off) {
  on.classList.toggle('hidden');
  off.classList.toggle('hidden');
};

function favoriteCard() {
  var favorite = document.querySelector(".star");
  var unfavorite = document.querySelector(".star-active");
    if (event.target.className === 'star') {
      toggleFavoriteOnAndOff(favorite, unfavorite)
    }
    else {
      toggleFavoriteOnAndOff(unfavorite, favorite)
    }
};

function removeCard () {
  var cardID = event.target.parentElement.id;
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id == cardID) {
      ideas.splice(i, 1);
      inputCardToHTML();
    }
  }
};

function displayCard(event) {
  event.preventDefault();
  createCard();
  inputCardToHTML();
  clearInputFields();
};

function createCard() {
  var ideaCard = new Idea(titleInput.value, bodyInput.value);
  ideas.push(ideaCard);
};

function clearInputFields() {
  titleInput.value = null;
  bodyInput.value = null;
  saveButton.disabled = true;
  saveButton.classList.remove('enable');
};

function inputCardToHTML() {
  savedIdeasSection.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
    savedIdeasSection.innerHTML += `
    <article class="card">
      <div class="fav-or-delete" id="${ideas[i].id}">
        <img class="star" src="assets/star.svg">
        <img class="star-active hidden" src="assets/star-active.svg">
        <img class="delete" src="assets/delete.svg">
        <img class="delete-active hidden" src="assets/delete-active.svg">
      </div>
      <div class="card-body">
        <h3>${ideas[i].title}</h3>
        <p>${ideas[i].body}</p>
      </div>
      <div class="comment">
        <img class="comment-image" src="assets/comment.svg">
        <h4 class="comment-text">Comment</h4>
      </div>
    </article>`
  }
};

function enableSaveButton() {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.classList.add('enable');
    saveButton.disabled = false;
  } else {
    saveButton.classList.remove('enable');
    saveButton.disabled = true;
  }
};
