import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`/search/${encodeURIComponent(query)}`);
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleQuery}
      ></input>
      <button type="submit" className="btn btn-outline-success my-2 my-sm-0">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
