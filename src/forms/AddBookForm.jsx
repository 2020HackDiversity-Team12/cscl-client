import React from "react";
import Button from "../components/Button";

export default function ({ onSubmit }) {
  return (
    <form class="uk-form-stacked">
      <Input name="Title" placeholder="Harry Potter 3" />
      <div className="uk-margin uk-width-1-1@s">
        <div class="uk-grid-match uk-child-width-expand@s" uk-grid="true">
          <div>
            <Input name="ISBN" placeholder="Eg: 214523621463X" />
          </div>
          <div>
            <Input name="Author" placeholder="John Doe" />
          </div>
        </div>
      </div>
      <div className="uk-margin uk-width-1-1@s">
        <div class="uk-grid-match uk-child-width-expand@s" uk-grid="true">
          <div>
            <Input name="Published Year" placeholder="2008" />
          </div>
          <div>
            <Input name="Number of copies" placeholder="Harry Potter 3" />
          </div>
        </div>
      </div>
      <div class="uk-margin-small uk-width-1-1@s uk-text-align uk-flex uk-flex-center">
        <Button
          className="uk-button uk-button-default"
          onClick={(e) => {
            e.preventDefault();
            onSubmit({ username: "admin", password: "admin" });
          }}
        >
          Add
        </Button>
      </div>
    </form>
  );
}

function Input({ name, type = "text", placeholder }) {
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
        />
      </div>
    </div>
  );
}
