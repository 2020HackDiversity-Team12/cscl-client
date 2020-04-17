import React from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";

export default function (props) {
  const { books, onClickItem } = props;
  return (
    <div
      class="uk-child-width-1-2@s
      uk-child-width-1-4@m 
      uk-text-center"
      uk-grid="masonry: true"
    >
      {books &&
        books.map((book) => (
          <BookItem
            key={book.isbn}
            mode="simple"
            book={book}
            onClickItem={onClickItem}
            {...props}
          />
        ))}
    </div>
  );
}

function bookItemGrid(books, onClickItem) {}

const isEmpty = (arr) => Array.isArray(arr) && arr.length == 0;
