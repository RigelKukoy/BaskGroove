import React from "react";

function FavoriteSongs({ inputSongs }) {
  const renderUserInput = inputSongs.map((songs) => (
    <li key={songs.id}>
      {songs.title} - {songs.artist}
    </li>
  ));

  return (
    <>
      {inputSongs.length ? (
        <div className="list-container">
          <h1>Your Favorite Songs</h1>
          <ul className="song-list">{renderUserInput}</ul>
        </div>
      ) : null}
    </>
  );
}

export default FavoriteSongs;
