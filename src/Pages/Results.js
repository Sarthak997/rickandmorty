import React from "react";
import EpisodesContainer from "../Components/EpisodesContainer";

export default function Result({ match }) {
  return (
    <EpisodesContainer
      apiPath={`?name=${match.params.query}&page=${match.params.page}`}
      page={+match.params.page || 1}
      route={`search/${encodeURIComponent(match.params.query)}/`}
    />
  );
}
