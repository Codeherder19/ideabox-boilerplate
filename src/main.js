var ideas = [];

var saveButton = document.querySelector('.save-card');
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body');
var savedIdeasSection = document.querySelector(".idea-cards");
var searchAllIdeas = document.querySelector('#search-button');
var showStarredIdeasButton = document.querySelector('#show-starred');

saveButton.addEventListener('click', displayCard);
titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);
savedIdeasSection.addEventListener('click', runningMethodsOnCardButtons);
window.addEventListener('load', retrieveIdeasFromLocalStorage);

function retrieveIdeasFromLocalStorage() {
  var localIdea;
  var parsedLocalIdea;
  var savedIdea;
  for (var i = 0; i < localStorage.length; i++)  {
    localIdea = localStorage.getItem(localStorage.key(i));
    parsedLocalIdea = JSON.parse(localIdea);
    savedIdea = new Idea(parsedLocalIdea.title, parsedLocalIdea.body);
    savedIdea.id = parsedLocalIdea.id;
    ideas.push(savedIdea);
  }
  inputCardToHTML();
}

function runningMethodsOnCardButtons(event) {
  if (event.target.className === "delete") {
    removeCard();
  }
  else if (event.target.className === "star" || event.target.className === "star-active") {
    favoriteCard();
  }
};

function toggleIconOnAndOff (on, off) {
  on.classList.toggle('hidden');
  off.classList.toggle('hidden');
};

function favoriteCard() {
    if (event.target.className === 'star') {
      starOnAndOff();
    }
    else {
      starOnAndOff();
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

function starOnAndOff () {
  var favorite = document.querySelectorAll(".star");
  var unfavorite = document.querySelectorAll(".star-active");
  var cardID = event.target.parentElement.id;
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id == cardID && ideas[i].star === false) {
      ideas[i].star = true;
      toggleIconOnAndOff(favorite[i], unfavorite[i]);
    }
    else if (ideas[i].id == cardID && ideas[i].star === true) {
      ideas[i].star = false;
      toggleIconOnAndOff(unfavorite[i], favorite[i]);
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
  ideaCard.saveToStorage();
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
        <div class="delete"></div>
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
