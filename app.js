const express = require('express');
const app = express();

app.use(express.static('client'));
app.use(express.json())

let songs = [];

app.param("id", function(req, res, next, id) {
  //find song with this id
  song = songs.find(song => song.id == parseInt(id));
  //attach song to req
  req.song = song;
  //call next()
  next();
});

//return list of all songs
app.get('/songs', (req, res) => {
  res.status(200).json(songs);
});

//create a new song, and return new song
app.post('/songs', (req, res) => {
  let newSong = {
    id: songs.length + 1,
    name: req.body.name,
    artist: req.body.artist 
  }
  songs.push(newSong);
  res.status(201).json(newSong);
});

//return a song with id 
app.get('/songs/:id', (req, res) => { 
  res.status(200).json(req.song);
});

//edit a song with id, and return edited song
app.put('/songs/:id', (req, res) => {
  let song = req.song;
  song.name = req.body.name;
  song.artist = req.body.artist;
  res.status(200).json(song);
});

//delete a song with id, and return deleted song
app.delete("/songs/:id", (req, res) => {
  let index = songs.indexOf(req.song);
  songs.splice(index, 1);
  res.status(200).json(req.song);
});

module.exports = app