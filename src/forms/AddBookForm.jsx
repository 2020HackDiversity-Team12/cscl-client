import React from "react";
import Button from "../components/Button";

function Input({ name, type = "text", placeholder, onChange }) {
  let inputRef = React.createRef();
  return (
    <div className="uk-margin uk-width-1-1@s">
      <label className="uk-form-label" htmlFor={name}>
        <span className="uk-text-bold">{name}</span>
      </label>
      <div className="uk-form-controls">
        <input
          className="uk-input uk-border-rounded"
          id="form-stacked-text"
          type={type}
          placeholder={`Eg: ${placeholder}`}
          ref={inputRef}
          onChange={() => {
            onChange(inputRef.current.value);
          }}
        />
      </div>
    </div>
  );
}

class AddBookForm extends React.Component {
  state = {
    title: "",
    isbn: "",
    author: "",
    publisher: "",
    publication_year: 0,
    copies: 0,
  };

  handleChange = (_key, value) => {
    let obj = {};
    obj[_key] = value;
    this.setState(obj);
  };

  render() {
    return (
      <form class="uk-form-stacked">
        <div className="uk-margin uk-width-1-1@s">
          <div class="uk-grid-match uk-child-width-expand@s" uk-grid="true">
            <div>
              <Input
                name="Title"
                placeholder="Harry Potter"
                onChange={(value) => this.handleChange("title", value)}
              />
            </div>
            <div>
              <Input
                name="ISBN"
                placeholder="214523621463X"
                onChange={(value) => this.handleChange("isbn", value)}
              />
            </div>
          </div>
        </div>
        <div className="uk-margin uk-width-1-1@s">
          <div class="uk-grid-match uk-child-width-expand@s" uk-grid="true">
            <div>
              <Input
                name="Publisher"
                placeholder="East Coast Publishing Co Inc"
                onChange={(value) => this.handleChange("publisher", value)}
              />
            </div>
            <div>
              <Input
                name="Author"
                placeholder="John Doe"
                onChange={(value) => this.handleChange("author", value)}
              />
            </div>
          </div>
        </div>

        <div className="uk-margin uk-width-1-1@s">
          <div class="uk-grid-match uk-child-width-expand@s" uk-grid="true">
            <div>
              <Input
                name="Publication Year"
                placeholder="2008"
                onChange={(value) => this.handleChange("published_year", value)}
              />
            </div>
            <div>
              <Input
                name="Number of copies"
                placeholder="8"
                onChange={(value) => this.handleChange("copies", value)}
              />
            </div>
          </div>
        </div>
        <div class="uk-margin-small uk-width-1-1@s uk-text-align uk-flex uk-flex-center">
          <div className="uk-margin-large-top">
            <button
              className="uk-button uk-background-secondary"
              onClick={(e) => {
                e.preventDefault();
                this.props.onSubmit(this.state);
              }}
            >
              <span style={{ color: "#fff" }}>Add</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddBookForm;
