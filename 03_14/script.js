/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Book from "./Book.js";

const Book1 = new Book(
  "1",
  "How to live a wonderful life",
  "celine Ishimwe",
  123
);
const Book2 = new Book(
  "2",
  "How to live with other people",
  "celine Ishimwe",
  123
);
const Book3 = new Book("3", "Meditation", "celine Ishimwe", 123);
const Book4 = new Book(
  "4",
  "How to live a wonderful life",
  "celine Ishimwe",
  123
);

console.log(Book1);
