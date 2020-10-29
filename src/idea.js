class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

//should only have one job which is to save the instance to storage
  saveToStorage() {

  }

  deleteFromStorage() {

  }
//should be able to update the idea's title, body, or starred state
  updateIdea() {

  }
}
