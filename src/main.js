var ideas = [];

var saveButton = document.querySelector('.save-card');
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body');
var savedPostersSection = document.querySelector(".idea-cards");
//var inputs = document.querySelectorAll('.card-input');


saveButton.addEventListener('click', displayCard);
//inputs.addEventListener('input', enableSaveButton);
titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);


function displayCard(event) {
  event.preventDefault();
  createCard();
  inputCardToHTML();
  clearInputFields();
};

function createCard() {
  var ideaCard = new Idea(titleInput.value, bodyInput.value);
  ideas.push(ideaCard);
  console.log(ideas);
};

function clearInputFields() {
  titleInput.value = null;
  bodyInput.value = null;
};

function inputCardToHTML() {
  savedPostersSection.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
    savedPostersSection.innerHTML += `
    <article class="card">
      <div class="fav-or-delete">
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
}
