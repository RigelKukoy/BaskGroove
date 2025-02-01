import React from "react";
import Songs from "../data.js";
import GenerateSongs from "./GenerateSongs.jsx";
import SimilarSongs from "./SimilarSongs.jsx";

function Main() {
  const [inputSongs, setInputSong] = React.useState(Songs);

  const submitSong = (formData) => {
    console.log("form has been submitted");
    const newTitle = formData.get("title");
    const newArtist = formData.get("artist");
    const newID = inputSongs.length + 1;
    setInputSong((prevSongs) => [
      ...prevSongs,
      { id: newID, title: newTitle, artist: newArtist },
    ]);
  };

  return (
    <div>
      <main className="main-container">
        <form className="input-container" action={submitSong}>
          <input
            className="input-component"
            placeholder="e.g. History"
            type="text"
            name="title"
            required
          />

          <input
            className="input-component"
            placeholder="e.g. One Direction"
            type="text"
            name="artist"
            required
          />
          <button className="add-song-button">+ Add song</button>
        </form>
      </main>
      <GenerateSongs inputSongs={inputSongs} />
    </div>
  );
}

export default Main;
