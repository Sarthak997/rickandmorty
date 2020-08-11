import React from "react";
import Episode from "./Episode";
import { Link } from "react-router-dom";

const EpisodeList = ({
  error,
  loading,
  resultCount,
  totalPages,
  episodes,
  hasNext,
  hasPrev,
  prevLink,
  nextLink,
}) => {
  const render = () => {
    if (loading) {
      return <div className="text-center">Loading ..</div>;
    } else {
      if (error) {
        return <div className="text-center">{error}</div>;
      } else {
        return (
          <>
            <div className=" text-center my-4">
              Total results({resultCount} entries in {totalPages} pages)
            </div>
            {episodes.map((d) => (
              <Episode key={d.id} data={d} />
            ))}
            <div className="text-center">
              {hasPrev && (
                <Link
                  className="btn btn-primary my-2 my-lg-0 mr-4"
                  to={prevLink}
                >
                  prev
                </Link>
              )}
              {hasNext && (
                <Link
                  className="btn btn-primary my-2 my-lg-0 mr-4"
                  to={nextLink}
                >
                  next
                </Link>
              )}
            </div>
          </>
        );
      }
    }
  };

  return <div className="container">{render()}</div>;
};

export default EpisodeList;
