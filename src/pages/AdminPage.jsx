import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ButtonMore from "../components/ButtonMore";
import Navbar from "../components/Navbar";
import BookService from "../services/BookService";
import { trackPromise } from "react-promise-tracker";
import Table from "../components/Table";

class AdminPage extends React.Component {
  state = {
    books: [],
    next: null,
    ajaxCall: true,
  };

  componentDidMount() {
    trackPromise(
      BookService.browse()
        .then((resp) => {
          console.log(resp.data);
          this.setState({
            books: resp.data.books,
            next: resp.data.next,
            ajaxCall: false,
          });
        })
        .catch((error) => {
          alert("unexpected error occured");
        })
    );
  }

  handleMore = () => {
    this.setState({ ajaxCall: true });
    trackPromise(
      BookService.browse(this.state.next)
        .then((resp) => {
          console.log(resp.data);
          this.setState({
            books: [...this.state.books, ...resp.data.books],
            next: resp.data.next,
            ajaxCall: false,
          });
        })
        .catch((error) => {
          alert("unexpected error occured");
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

  render() {
    return (
      <div>
        <Navbar searchBar={false} />
        <div className="uk-container uk-margin-medium">
          <Table books={this.state.books} onDelete={this.handleDelete} />
        </div>

        <div className="uk-margin">
          <LoadingSpinner />
        </div>

        <div class="uk-flex uk-flex-center uk-flex-middle uk-margin-medium">
          <ButtonMore onMore={this.handleMore} hidden={this.state.ajaxCall} />
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
