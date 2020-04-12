import React from "react";

import LoadingSpinner from "../components/LoadingSpinner";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import ButtonMore from "../components/ButtonMore";
import Button from "../components/Button";
import BookItem from "../components/BookItem";

export default function () {
  return (
    <div className="uk-container uk-container-small">
      <h2>Shared Components</h2>

      <div className="uk-margin">
        <pre>
          <div>Component: {"<Logo />"}</div>
          <div>Props: size=(small|medium|large)</div>
        </pre>
        <Logo />
      </div>

      <div className="uk-margin">
        <pre>
          <div>Component: {"<LoadingSpinner />"}</div>
          <div>Props: None</div>
        </pre>
        <LoadingSpinner />
      </div>

      <div className="uk-margin">
        <pre>
          <div>Component: {"<Navbar />"}</div>
          <div>Props: None</div>
        </pre>
        <Navbar />
      </div>

      <div className="uk-margin">
        <pre>
          <div>Component: {"<Button>Text</Button"}</div>
          <div>Props: size=(small|large), disabled=(boolean), onClick=(Fn)</div>
        </pre>
        <Button>text</Button>
      </div>

      <div className="uk-margin">
        <pre>
          <div>Component: {"<ButtonMore />"}</div>
          <div>Props: onClick=(Fn)</div>
        </pre>
        <ButtonMore />
      </div>

      <div className="uk-margin">
        <pre>
          <div>Component: {"<BookItem />"}</div>
          <div>Props: book=(object), onBorrow=(Fn), onReturn=(Fn)</div>
        </pre>
        <BookItem />
      </div>
    </div>
  );
}
