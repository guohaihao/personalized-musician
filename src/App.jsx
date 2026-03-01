import { useState } from 'react';
import songs from '../songs.json';

function App() {
  const [query, setQuery] = useState('');

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <main className="page">
      <section className="shell">
        <header className="hero">
          <p className="eyebrow">Listening</p>
          <h1>Song List</h1>
          <p className="intro">A minimal single-page player powered by local JSON.</p>
        </header>

        <label className="search">
          <span className="search-label">Search by title</span>
          <input
            type="search"
            placeholder="Type a song title"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <div className="song-list">
          {filteredSongs.map((song) => (
            <article className="song-card" key={song.id ?? song.audioUrl}>
              <div className="song-copy">
                <h2>{song.title}</h2>
                {song.description ? <p>{song.description}</p> : null}
              </div>
              <audio controls preload="none" src={song.audioUrl}>
                Your browser does not support the audio element.
              </audio>
            </article>
          ))}

          {filteredSongs.length === 0 ? (
            <p className="empty">No songs match your search.</p>
          ) : null}
        </div>
      </section>
    </main>
  );
}

export default App;
