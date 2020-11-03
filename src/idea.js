class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

//should only have one job which is to save the instance to storage
  saveToStorage() {
    var locallyStoredIdea = this;
    localStorage.setItem(this.id, JSON.stringify(locallyStoredIdea));
  }

  deleteFromStorage() {
    localStorage.removeItem(this.id);
  }
//should be able to update the idea's title, body, or starred state
  updateIdea() {
    var storedStarredValue = this.star;
    var retrieveStoredIdea = localStorage.getItem(this.id);
    JSON.parse(retrieveStoredIdea);
  }
}
