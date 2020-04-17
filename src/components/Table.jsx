import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

class Table extends React.Component {
  render() {
    const { books, onDelete } = this.props;
    return (
      <table class="uk-table uk-table-striped">
        <thead>
          <tr>
            <th>Tile</th>
            <th>Author</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => (
              <tr key={book.isbn}>
                <td>{book.title.trunc(30)}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <Button
                    uk-icon="icon:trash;ratio:1.1"
                    className="uk-text-danger"
                    onClick={() => {
                      onDelete(book);
                    }}
                  ></Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
