function findAccountById(accounts, id) {
  let findAccount = accounts.find((account) => account.id === id);
  return findAccount;
}

function sortAccountsByLastName(accounts) {
  let sortAccount = accounts.sort((account1, account2) =>
    account1.name.last > account2.name.last ? 1 : -1
  );
  return sortAccount;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  books.forEach((book) => {
    if (book.borrows.some((borrowList) => borrowList.id.includes(account.id))) {
      total++;
    }
    return total;
  });
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksBorrowed = [];
  books.forEach((book) => {
    if (
      book.borrows.find(
        (borrowList) => borrowList.id === account.id && !borrowList.returned
      )
    ) {
      booksBorrowed.push(book);
    }
  });
  console.log(booksBorrowed);

  booksBorrowed.forEach((book) => {
    let authorMatch = authors.find((author) => author.id === book.authorId);
    console.log(authorMatch);
    book["author"] = authorMatch;
  });
  return booksBorrowed;
}

//  return an array with the books borrowed by an account
// embedd author of the book within object after book

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
