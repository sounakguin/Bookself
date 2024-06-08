import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookshelfContext } from "../BookshelfContext";

export default function Bookdata() {
  const [fetchdata, setfetchdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const navigate = useNavigate();
  const { bookshelf, addToBookshelf } = useContext(BookshelfContext);

  const getdata = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      const data = await res.json();
      setfetchdata(data.docs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata(query);
  }, [query]);

  const handelsearch = (event) => {
    setQuery(event.target.value);
  };

  const bookself = () => {
    navigate("/mybookself");
  };

  const handleAddToBookshelf = (book) => {
    const isBookAlreadyInBookshelf = bookshelf.some(
      (b) => b.title === book.title
    );

    if (!isBookAlreadyInBookshelf) {
      addToBookshelf(book);
    } else {
      alert("Book is already in the bookshelf");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-1">
        <div className="ml-52"></div>
        <div className="flex flex-col">
          <label className="text-xl font-bold">Search by book name:</label>
          <input
            type="text"
            onChange={handelsearch}
            value={query}
            className="border border-black rounded-md mt-5"
          />
        </div>
        <div className="mr-36 mt-3">
          <button
            type="button"
            className="bg-green-500 text-white py-2 px-6 border rounded-full"
            onClick={bookself}
          >
            My Bookshelf
          </button>
        </div>
      </div>

      {loading ? (
        <p className="pt-5 text-xl flex justify-center items-center">
          Loading...
        </p>
      ) : (
        <div className="flex justify-center w-full mt-28">
          <div className="flex flex-wrap gap-4 w-3/4 justify-center">
            {fetchdata.map((book, index) => (
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
                <button
                  type="button"
                  className="bg-green-500 text-white py-1 border rounded-full mt-9"
                  onClick={() => handleAddToBookshelf(book)}
                >
                  Add to Bookshelf
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
