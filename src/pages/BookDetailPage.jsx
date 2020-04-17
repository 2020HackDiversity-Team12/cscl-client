import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ButtonMore from "../components/ButtonMore";
import Navbar from "../components/Navbar";
import BookItemList from "../components/BookItemList";
import BookService from "../services/BookService";
import BookItem from "../components/BookItem";
import { trackPromise } from "react-promise-tracker";
import Logo from "../components/Logo";

class BookDetailPage extends React.Component {
  state = {
    book: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    trackPromise(
      BookService.get(id)
        .then((resp) => {
          console.log(resp.data);
          this.setState({
            book: resp.data,
          });
        })
        .catch((error) => {
          alert("unexpected error occured");
        })
    );
  }

  handleAction = (act) => {
    let fn = null;
    if (act == "borrow") fn = BookService.borrow;
    else fn = BookService.handback;
    trackPromise(
      fn(this.state.book)
        .then((resp) => {
          console.log(resp.data);
          if (resp.data instanceof Object) {
            this.setState({
              book: resp.data,
            });
          }
        })
        .catch((error) => {
          alert("unexpected error occured");
        })
    );
  };

  render() {
    return (
      <div>
        <Navbar />
        <div
          class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"
          uk-grid="true"
          style={{ backgroundColor: "rgba(255, 249, 196, 0.5)" }}
        >
          <div
            uk-height-viewport="offset-bottom:20"
            className="
            uk-flex
            uk-flex-center
            uk-flex-middle
            uk-flex-column
            uk-background-sec"
          >
            <div
              style={styles.imgContainer}
              className="uk-border-rounded uk-box-shadow-small"
            >
              <img src={this.state.book.image_url_l} width="250" />
            </div>
            <h3
              className="uk-margin-small uk-text-capitalize"
              style={styles.text}
            ></h3>
          </div>
          <div
            className="uk-padding-large
                uk-text-center uk-flex uk-flex-middle 
                uk-flex-column uk-flex-center"
          >
            <BookItem
              mode="verbose"
              book={this.state.book}
              onBorrow={() => this.handleAction("borrow")}
              onHandBack={() => this.handleAction("handback")}
            />
            <LoadingSpinner />
          </div>
        </div>
        <footer className="uk-margin-small uk-text-center">
          <div className="uk-text-medium uk-dark uk-text-medium">
            &copy;2020 Handcrafted By Team12
          </div>
        </footer>
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

export default BookDetailPage;
