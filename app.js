const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
// const _ = require('lodash');
const PORT = 3000

app.use(express.static('client'));
app.use(express.json())

let songs = [
  { id: "1", name: "Pop", artist: "A" },
  { id: "2", name: "Rock", artist: "B" },
  { id: "3", name: "Classical", artist: "C" }
];


//return list of all songs
app.get("/songs", function(req, res) {
  res.status(200).json(songs);
});

//create a new song, and return new song
app.post("/songs", function(req, res) {
  console.log(req.body);
  const songName = req.body.name;
  const artistName = req.body.artist;
  songs.push({ id: songs.length + 1, name: songName, artist: artistName });

  res.status(200);
  res.json(songName);
});


//return a song with id 
app.get("/songs/:id", function(req, res) {
  const songId = req.params.id;
  const requestedSong = songs.find(song => song.id === songId);
  res.status(200);
  res.send(requestedSong);
});


//edit a song with id, and return edited song
app.put("/songs/:id", function(req, res) {
  // 1. get song to be updated
  console.log(req.params.id);
  let songsWithMatchingId = songs.filter(song => song.id === req.params.id);
  let songToBeUpdated = songsWithMatchingId[0];

  // 2. update book
  songToBeUpdated["name"] = req.body.name;

  // 3. send response with updated book
  res.status(200);
  res.send(songToBeUpdated);
});


//delete a song with id, and return deleted song
app.delete("/songs/:id", function(req, res) {
    // 1. filter out the song which match the id
    const songId = req.params.id;
    let deletedSong = songs.find(song => song.id === songId);
    songs = songs.filter(song => song.id !== req.params.id);
    // 2. send response with remaining books
    res.status(200);
    res.send(deletedSong);
});




app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
