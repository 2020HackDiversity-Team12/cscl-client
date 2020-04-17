import React from "react";
import BookItem from "../components/BookItem";

export default function ({ book }) {
  return (
    <div id="modal-example" class="uk-modal-full" uk-modal="true">
      <div class="uk-modal-dialog">
        <button
          class="uk-modal-close-full uk-close-large"
          type="button"
          uk-close="true"
        ></button>
        <div
          class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"
          uk-grid="true"
          style={{ backgroundColor: "rgba(255, 249, 196, 0.5)" }}
        >
          <div
            uk-height-viewport="true"
            className="uk-flex 
                uk-flex-center 
                uk-flex-middle 
                uk-flex-column
                uk-background-secondary"
          >
            <div
              style={styles.imgContainer}
              className="uk-border-rounded uk-box-shadow-small"
            >
              <img src={book.image_url_l} width="250" />
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
            <BookItem mode="verbose" book={book} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  imgContainer: {
    border: "5px solid #ccc",
  },
};
