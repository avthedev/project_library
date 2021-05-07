function getTotalBooksCount(books) {
  let bookLength = books.length;
  return bookLength;
}

function getTotalAccountsCount(accounts) {
  let accountLength = accounts.length;
  return accountLength;
}

function getBooksBorrowedCount(books) {
  let totalBooksBorrowed = 0;
  books.forEach((book) => {
    book.borrows.forEach((borrowed) => {
      if (borrowed.returned === false) {
        totalBooksBorrowed++;
      }
      return totalBooksBorrowed;
    });
  });
  return totalBooksBorrowed;
}

function getMostCommonGenres(books) {
  let results = [];
  books.forEach((book) => {
    if (results.find((result) => result.name === book.genre)) {
      let found = results.find((result) => result.name === book.genre);
      found.count++;
    } else {
      results.push({
        name: book.genre,
        count: 1,
      });
    }
  });
  results.sort((a, b) => b.count - a.count);
  if (results.length > 5) {
    return results.slice(0, 5);
  }
  return results;
}

function getMostPopularBooks(books) {
  let results = [];
  books.sort((book1, book2) =>
    book1.borrows.length < book2.borrows.length ? 1 : -1
  );
  books.forEach((book) => {
    results.push({
      name: book.title,
      count: book.borrows.length,
    });
  });
  return results.slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
  let popBooks = getMostPopularBooks(books);

  popBooks.forEach((popBooksList) => {
    let findBooks = books.find(
      (bookList) => popBooksList.name === bookList.title
    );
    let findAuthor = authors.find(
      (authorList) => findBooks.authorId === authorList.id
    );
    const firstName = findAuthor.name.first;
    const lastName = findAuthor.name.last;
    popBooksList.name = `${firstName} ${lastName}`;
    return popBooksList;
  });
  return popBooks;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
