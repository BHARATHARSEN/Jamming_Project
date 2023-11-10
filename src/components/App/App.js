import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Spotify from '../util/Spotify';

function App() {

  
  const [searchResults,setSearchResults] = useState('');
  const [playlistName,setPlaylistName] = useState('');
  const [playlistTracks,setPlaylistTracks] = useState('');

  const search = (term) => {
    Spotify.search(term).then((display) => setSearchResults(display));

  }

  const addTrack = (track) {
    if(!playlistTracks.find((trackz) => trackz.id === track.id)){
      setPlaylistTracks(...playlistTracks, track)
    }

  }

  const removeTrack = (track) {
    const updatedPlaylist = playlistTracks.filter((trackz) => trackz.value !== track.value)
  }

  const updatedPlaylistName = (name) => {
    setPlaylistName(name)
  }

  





  return (
  




 
  );
}

export default App;
