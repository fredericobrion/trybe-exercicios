const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    console.log(data);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const movies = await readFile();
    const movie = movies.find((m) => m.id === Number(id));
    res.status(200).json(movie);
  } catch {
    res.status(404).json({ message: 'Filme não encontrado' });
  }
});

app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch {
    res.status(404).json({ message: 'Filme não encontrado' });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length -1].id + 1,
      movie,
      price,
    }
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    const movieIndex = movies.findIndex((m) => m.id === Number(id));
    if (movieIndex === -1) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
    const newMovie = {
      id: Number(id),
      movie,
      price,
    };
    movies[movieIndex] = newMovie;
    const updatedMovies = JSON.stringify(movies);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(201).json(newMovie);

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end;

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readFile();
    if (q) {
      const filteredMovies = movies.filter((element) => element.movie.includes(q));
      return res.status(200).json(filteredMovies);
    }
    res.status(200).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;
