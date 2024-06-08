import React, { useContext } from "react";
import { BookshelfContext } from "../BookshelfContext";

export default function MyBookshelf() {
  const { bookshelf } = useContext(BookshelfContext);

  return (
    <>
    <p className="flex justify-center items-center text-xl pt-2">My Bookself</p>
    <div className="flex justify-center w-full mt-20">
      <div className="flex flex-wrap gap-4 w-3/4 justify-center">
      
        {bookshelf.length === 0 ? (
          <p>No books in your bookshelf.</p>
        ) : (
          bookshelf.map((book, index) => (
            <div
              key={index}
              className="flex flex-col h-60 pt-5 w-52 border border-black p-4 shadow-md rounded bg-white"
            >
              <p>
                <strong>Book Title: </strong> {book.title}
              </p>
              <p>
                <strong>Edition Count: </strong> {book.edition_count}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
}
