function Main() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('You clicked the button!');
  };

  const handleOnSumbit = (event) => {
    event.preventDefault();
    console.log('form has been submitted');
    const formData = new FormData(event.currentTarget);
    const newTitle = formData.get('title');
    const newArtist = formData.get('artist');
    const newID = favoriteSongs.length + 1;

    favoriteSongs.push({ id: newID, title: newTitle, artist: newArtist });
    console.log(favoriteSongs);
  };

  const favoriteSongs = [
    { id: 1, title: 'Sorbet', artist: 'Galdive' },
    { id: 2, title: 'Martini Blue', artist: 'DPR Live' },
    { id: 3, title: 'From the Start', artist: 'Laufey' },
  ];

  const renderUserInput = favoriteSongs.map((songs) => (
    <li key={songs.id}>
      {songs.title} - {songs.artist}
    </li>
  ));

  return (
    <main className="main-container">
      <form className="input-container" onSubmit={handleOnSumbit}>
        <input
          className="input-component"
          placeholder="e.g. History"
          type="text"
          name="title"
        />

        <input
          className="input-component"
          placeholder="e.g. One Direction"
          type="text"
          name="artist"
        />
        <button className="add-song-button">+ Add song</button>
      </form>
      <div className="list-container">
        <ul>{renderUserInput}</ul>
      </div>
    </main>
  );
}

export default Main;
