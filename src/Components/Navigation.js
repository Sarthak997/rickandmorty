import React from "react";
import SearchForm from "./SearchForm";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Rick &amp; Morty
      </a>
      <SearchForm />
    </nav>
  );
}
