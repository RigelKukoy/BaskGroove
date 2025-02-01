import React from "react";
import ReactMarkdown from "react-markdown";

function SimilarSongs({ Response }) {
  return (
    <>
      <div className="response-container">
        <section className="suggested-sons-container">
          <ReactMarkdown>{Response}</ReactMarkdown>
        </section>
      </div>
    </>
  );
}

export default SimilarSongs;
