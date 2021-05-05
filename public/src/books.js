function findAuthorById(authors, id) {
  let findAuthor = authors.find((author) => author.id === id);
  return findAuthor;
}

function findBookById(books, id) {
  let findBook = books.find((books) => books.id === id);
  return findBook;
}

function partitionBooksByBorrowedStatus(books) {
  let results = [];
  let notReturned = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.returned == false);
  });
  results.push(notReturned);
  let returned = books.filter((book) => {
    return book.borrows.every((borrow) => borrow.returned == true);
  });
  results.push(returned);
  return results;
}

function getBorrowersForBook(book, accounts) {
  let results = [];
  let borrows = book.borrows;
  borrows.forEach((borrow) => {
    let account = accounts.find((acc) => acc.id.includes(borrow.id));
    let checkDuplicate = results.some((borrow) => borrow.id === account.id);
    if (!checkDuplicate) {
      account["returned"] = borrow.returned;
      results.push(account);
    }
    return results;
  });
  return results;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
