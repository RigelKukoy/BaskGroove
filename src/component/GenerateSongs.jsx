import React from "react";
import FavoriteSongs from "./FavoriteSongs";
import SimilarSongs from "./SimilarSongs";
import { getResponsefromAI } from "../AI";

function GenerateSongs({ inputSongs }) {
  const [AIResponse, setAIResponse] = React.useState("");

  async function getAIResponse() {
    const response = await getResponsefromAI(inputSongs);
    setAIResponse(response);
    console.log(response);
  }

  return (
    <div className="section-container">
      <FavoriteSongs inputSongs={inputSongs} />
      {inputSongs.length > 3 ? (
        <section className="generate-songs-container">
          <div className="description">
            <h3 className="section-title">Done listing you favorite songs?</h3>
            <p className="section-subtitle">
              Find similar songs from your list of favorite songs.
            </p>
          </div>
          <div className="button-container">
            <button className="generate-button" onClick={getAIResponse}>
              Find Songs..
            </button>
          </div>
        </section>
      ) : null}
      {AIResponse && <SimilarSongs Response={AIResponse} />}
    </div>
  );
}

export default GenerateSongs;
