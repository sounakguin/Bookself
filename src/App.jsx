import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book from "./Components/Bookpage";
import MyBookshelf from "./Components/Mybookself";
import { BookshelfProvider } from "./BookshelfContext";

function App() {
  return (
    <BookshelfProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/mybookself" element={<MyBookshelf />} />
        </Routes>
      </Router>
    </BookshelfProvider>
  );
}

export default App;
