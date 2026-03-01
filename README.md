# React Listening Website

Minimal single-page React site built with Vite. Songs are loaded from `songs.json` in the project root, and audio files are served from `public/audio/`.

## Run

```bash
npm install
npm run dev
```

## Deploy To GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` will build and publish the site.

## Song Data

Update `songs.json` to add or edit songs:

```json
[
  {
    "id": "song001",
    "title": "Generated Song",
    "description": "Optional text",
    "audioUrl": "/audio/song001.mp3"
  }
]
```

Put matching MP3 files in `public/audio/`.
