import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default (props) =>
  props.mode == "simple" ? (
    <BookItemSimple {...props} />
  ) : (
    <BookItemVerbose {...props} />
  );

function BookItemVerbose(props) {
  const { book } = props;
  const allowKeys = [
    "isbn",
    "author",
    "publisher",
    "available",
    "publication_year",
  ];

  return (
    <React.Fragment>
      <h2>{book.title}</h2>
      {book &&
        allowKeys.map((_key) => (
          <p className="uk-margin-remove uk-text-capitalize">
            <span className="uk-text-bold">{_key}:</span> {book[_key]}
          </p>
        ))}

      <div className="uk-margin">
        <BookItemAction book={book} {...props} />
      </div>
    </React.Fragment>
  );
}

function BookItemSimple(props) {
  const { book, onClickItem } = props;
  return (
    <div className="uk-animation-fade">
      <div className="uk-card uk-card-small uk-card-body uk-border-rounded">
        <Link to={`/detail/${book.isbn}`}>
          <img
            src={book.image_url_l}
            alt=""
            width="180"
            className="uk-border-rounded"
            style={styles.poster}
          />
        </Link>
        <h4 className="uk-text-capitalize uk-margin-remove-bottom uk-margin-small-top">
          <Link className="uk-link-reset" to={`/detail/${book.isbn}`}>
            {book.title.trunc(50)}
          </Link>
        </h4>
      </div>
    </div>
  );
}

function BookItemAction(props) {
  return (
    <React.Fragment>
      <div class="uk-button-group">
        {props.book && props.book.available && props.book.available > 0 ? (
          <Button
            size="small"
            style={styles.action}
            onClick={() => {
              props.onBorrow(props.book);
            }}
          >
            borrow
          </Button>
        ) : (
          <Button size="small" style={styles.action} disabled="true">
            borrow
          </Button>
        )}
        &nbsp;&nbsp;
        <Button
          size="small"
          style={styles.action}
          onClick={() => {
            props.onHandBack(props.book);
          }}
        >
          handback
        </Button>
      </div>
      {/* <p className="uk-text-danger uk-text-capitalize uk-margin-remove uk-text-bold">
          not available
        </p> */}
    </React.Fragment>
  );
}

const styles = {
  title: {
    fontWeight: "bold",
  },
  poster: {
    border: "3px solid #cfcfcf",
  },
  action: {
    border: "1px solid #ccc",
    fontSize: "11px",
    borderRadius: "100px",
    backgroundColor: "#FFFDE7",
  },
};
