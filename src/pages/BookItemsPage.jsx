import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ButtonMore from "../components/ButtonMore";
import Navbar from "../components/Navbar";
import BookItemList from "../components/BookItemList";
import BookService from "../services/BookService";
import BookItem from "../components/BookItem";
import { trackPromise } from "react-promise-tracker";
import Logo from "../components/Logo";

class BookItemsPage extends React.Component {
  state = {
    books: [],
    next: null,
  };

  componentDidMount() {
    trackPromise(
      BookService.browse()
        .then((resp) => {
          console.log(resp.data);
          this.setState({
            books: resp.data.books,
            next: resp.data.next,
          });
        })
        .catch((error) => {
          alert("unexpected error occured");
        })
    );
  }

  handleMore = () => {
    trackPromise(
      BookService.browse(this.state.next)
        .then((resp) => {
          console.log(resp.data);
          this.setState({
            books: [...this.state.books, ...resp.data.books],
            next: resp.data.next,
          });
        })
        .catch((error) => {
          alert("unexpected error occured");
        })
    );
  };

  // handleAction = (act) => {
  //   let fn = null;
  //   if (act == "borrow") fn = BookService.borrow;
  //   else fn = BookService.handback;
  //   trackPromise(
  //     fn(this.state.book)
  //       .then((resp) => {
  //         console.log(resp.data);
  //         if (resp.data instanceof Object) {
  //           this.setState({
  //             book: resp.data,
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         alert("unexpected error occured");
  //       })
  //   );
  // };

  render() {
    return (
      <div>
        <Navbar />
        <div className="uk-container uk-text-center uk-margin-large">
          <BookItemList
            books={this.state.books}
            onClickItem={this.handleClickItem}
          />
        </div>
        <LoadingSpinner />

        <div class="uk-flex uk-flex-center uk-flex-middle uk-margin-large">
          <ButtonMore onMore={this.handleMore} />
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

export default BookItemsPage;
