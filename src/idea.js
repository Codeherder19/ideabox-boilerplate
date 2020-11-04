class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

  saveToStorage() {
    var locallyStoredIdea = this;
    localStorage.setItem(this.id, JSON.stringify(locallyStoredIdea));
  }

  deleteFromStorage() {
    localStorage.removeItem(this.id);
  }

  updateIdea() {

  }
}
