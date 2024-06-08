import React, { createContext, useState } from "react";

export const BookshelfContext = createContext();

export const BookshelfProvider = ({ children }) => {
  const [bookshelf, setBookshelf] = useState([]);

  const addToBookshelf = (book) => {
    setBookshelf((prevBookshelf) => [...prevBookshelf, book]);
  };

  return (
    <BookshelfContext.Provider value={{ bookshelf, addToBookshelf }}>
      {children}
    </BookshelfContext.Provider>
  );
};
