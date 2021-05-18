class Book {
  constructor(id, name, author, size) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.size = size;
  }

  changeName(name) {
    this.name = name;
  }

  changeAuthor(author) {
    this.author = author;
  }
}

export default Book;
