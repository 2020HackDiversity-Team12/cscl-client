import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ButtonMore from "../components/ButtonMore";
import Navbar from "../components/Navbar";
import BookItemList from "../components/BookItemList";
import BookService from "../services/BookService";
import BookItem from "../components/BookItem";
import { trackPromise } from "react-promise-tracker";
import Logo from "../components/Logo";

class SearchPage extends React.Component {
  state = {
    books: [],
    next: null,
  };

  componentDidMount() {
    const { q } = this.props.match.params;
    trackPromise(
      BookService.search(q)
        .then((resp) => {
          console.log(resp.data);
          this.setState({
            books: resp.data,
          });
        })
        .catch((error) => {
          alert("unexpected error occured");
        })
    );
  }

  render() {
    let x = null;

    if (this.state.books.length != 0) {
      x = (
        <BookItemList
          books={this.state.books}
          onClickItem={this.handleClickItem}
        />
      );
    } else {
      x = (
        <h3 className="uk-text-danger uk-text-capitalize">
          sorry no results found
        </h3>
      );
    }
    return (
      <div>
        <Navbar />
        <div className="uk-container uk-text-center uk-margin-large">{x}</div>
        <LoadingSpinner />
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

export default SearchPage;
