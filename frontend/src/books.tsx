import React from 'react';
import apiClient from './utils/api';

const Books = () => {
  const [books, setBooks] = React.useState<any[]>([]);
  React.useEffect(() => {
    apiClient
      .get('/api/book')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  const bookList = books.map((book) => <li key={book.id}>{book.title}</li>);
  return <ul>{bookList}</ul>;
};

export default Books;
