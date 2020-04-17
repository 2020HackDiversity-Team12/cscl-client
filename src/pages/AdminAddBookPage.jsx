import React from "react";
import { Link, Redirect } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import Navbar from "../components/Navbar";
import AddBookForm from "../forms/AddBookForm";
import BookService from "../services/BookService";

class AdminLoginPage extends React.Component {
  componentDidMount() {}

  handleNewBook = (book) => {
    console.log(this.props.history);
    trackPromise(
      BookService.add(book)
        .then((resp) => {
          console.log(resp.data);
          if (resp.data !== "Invalid Entry") {
            alert("successfully added");
            this.props.history.push("/admin");
          }
        })
        .catch((error) => {
          alert("unexpected error occured");
          console.log(error);
        })
    );
  };

  render() {
    return (
      <div>
        <Navbar searchBar={false} />
        <div className="uk-container uk-margin-large">
          <AddBookForm onSubmit={this.handleNewBook} />
        </div>

        <footer className="uk-margin-large-top uk-text-center">
          <div className="uk-text-medium uk-dark uk-text-medium">
            &copy;2020 Handcrafted By Team12
          </div>
        </footer>
      </div>
    );
  }
}

const styles = {
  container: {
    border: "1px solid #ddd",
    padding: "25px",
    backgroundColor: "#f5f5f5",
  },
  form: {
    width: "400px",
  },
  cover: {
    backgroundColor: "#212121",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};

export default AdminLoginPage;
