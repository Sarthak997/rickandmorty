import React from "react";
import EpisodesContainer from "../Components/EpisodesContainer";

export default function Home({ match }) {
  return (
    <EpisodesContainer
      apiPath={`?page=${match.params.page}`}
      page={+match.params.page || 1}
    />
  );
}
