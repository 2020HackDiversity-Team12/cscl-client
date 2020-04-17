import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ButtonMore from "../components/ButtonMore";
import Navbar from "../components/Navbar";
import BookItemList from "../components/BookItemList";
import BookService from "../services/BookService";
import BookItem from "../components/BookItem";
import { trackPromise } from "react-promise-tracker";
import Logo from "../components/Logo";
import Table from "../components/Table";
import AddBookForm from "../forms/AddBookForm";
import { useAlert } from "react-alert";

class AdminPage extends React.Component {
  state = {
    books: [],
    currentBook: {},
  };

  componentDidMount() {
    trackPromise(
      BookService.browse()
        .then((resp) => {
          this.setState({
            books: resp.data,
          });
        })
        .catch((error) => {
          alert("unexpected error occured");
        })
    );
  }

  handleClickItem = (book) => {
    this.setState({
      currentBook: book,
    });
  };

  handleNewBook = (book) => {
    trackPromise(
      BookService.add(book)
        .then((resp) => {
          console.log(resp.data);
          if (resp.data !== "Invalid Entry") {
            alert("successfully added");
            this.setState({
              books: [book, ...this.state.books],
            });
          }
        })
        .catch((error) => {
          alert("unexpected error occured");
          this.setState({ ajaxCall: false });
        })
    );
  };

  handleDelete = (book) => {
    const answer = window.confirm(
      "Are you sure you want to delete this book ?"
    );
    if (!answer) return;

    trackPromise(
      BookService.remove(book.isbn)
        .then((resp) => {
          let copy = this.state.books;
          let arr = copy.filter((book) => book.isbn != resp.data.isbn);
          this.setState({
            books: arr,
          });
          alert("this book has been successfully removed");
        })
        .catch((error) => {
          console.log(error);
          alert("unexpected error occured");
        })
    );
  };

  renderModal() {
    return (
      <div
        id="modal-center"
        class="uk-flex-top uk-margin-large"
        uk-modal="true"
      >
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button
            class="uk-modal-close-default"
            type="button"
            uk-close="true"
          ></button>
          <AddBookForm onSubmit={this.handleNewBook} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Navbar searchBar={false} />
        <div
          className="uk-container uk-margin-medium
        "
        >
          <Table books={this.state.books} onDelete={this.handleDelete} />
        </div>
        {this.renderModal()}
        <div className="uk-margin">
          <LoadingSpinner />
        </div>
      </div>
    );
  }
}

const styles = {
  text: {
    color: "#fff",
  },
  imgContainer: {
    border: "5px solid #ccc",
  },
};

export default AdminPage;
