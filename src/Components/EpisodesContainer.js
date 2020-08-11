import React, { useState, useEffect } from "react";
import api from "../api/index";
import EpisodeList from "./EpisodeList";

export default function EpisodesContainer({ page, apiPath, route }) {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [resultCount, setResultCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      setError(null);
      try {
        setLoading(true);
        const response = await api.get(apiPath);
        setTotalPages(+response.data.info.pages);
        setResultCount(+response.data.info.count);
        setEpisodes(response.data.results);
        console.log(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.error);
        setLoading(false);
      }
    }

    loadData();
  }, [apiPath]);

  return (
    <EpisodeList
      error={error}
      loading={loading}
      episodes={episodes}
      resultCount={resultCount}
      totalPages={totalPages}
      hasNext={page < totalPages}
      hasPrev={page > 1}
      prevLink={`/${route ? route : ""}${page - 1}`}
      nextLink={`/${route ? route : ""}${page + 1}`}
    />
  );
}
