import React from "react";

import LoadingSpinner from "../components/LoadingSpinner";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import ButtonMore from "../components/ButtonMore";
import Button from "../components/Button";
import BookItem from "../components/BookItem";

export default function () {
  return (
    <div>
      <div
        class="uk-flex uk-flex-center uk-flex-middle uk-flex-column"
        uk-height-viewport="true"
      >
        <Logo />
        <h2 className="uk-text-capitalize uk-margin-remove">
          coffe shop community library
        </h2>

        <form class="uk-search uk-search-default uk-width-1-3 uk-margin-medium-top uk-margin-medium-bottom">
          <input
            class="uk-search-input uk-width-1-1"
            type="search"
            placeholder="ISBN or Book Title..."
          />
        </form>

        <Button>search</Button>
      </div>
    </div>
  );
}
