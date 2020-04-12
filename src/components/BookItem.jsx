import React from "react";
import Button from "./Button";

function BookItem(props) {
  return (
    <div
      className="uk-child-width-1-2@s uk-child-width-1-4@m uk-text-center uk-grid-small"
      uk-grid="true"
    >
      <div>
        <img src="book.jpg" alt="" width="150" className="uk-border-rounded" />
        <h4 className="uk-text-capitalize uk-margin-remove-bottom uk-margin-small-top">
          book title
        </h4>
        <div className="uk-margin-small">
          <div class="uk-button-group">
            <Button size="small">borrow</Button>&nbsp;
            <Button size="small">return</Button>
          </div>
        </div>
        {/* <p className="uk-text-danger uk-text-capitalize uk-margin-remove uk-text-bold">
          not available
        </p> */}
      </div>
    </div>
  );
}

const styles = {
  title: {
    fontWeight: "bold",
  },
};

export default BookItem;
