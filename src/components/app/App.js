import React from 'react';
import './App.css';
import SearchBar from '../searchBar/searchBar.js';
import Playlist from '../playlist/playlist.js';
import SearchResults from '../searchResults/searchResults.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'name1', artist: 'artisit1',album: 'album1', id: 1}, {name: 'name2',artist: 'artisit2',album: 'album2', id: 2}, {name: 'name3',artist: 'artisit3',album: 'album3', id: 3}],
      playlistName: 'playlist1',
      playlistTracks: [{name: 'playlistname1', artist: 'artisit1',album: 'album1', id: 4}, {name: 'playlistname2',artist: 'artisit2',album: 'album2', id: 5}, {name: 'playlistname3',artist: 'artisit3',album: 'album3', id: 6}, {name: 'playlistname4',artist: 'artisit4',album: 'album4', id: 7}, {name: 'playlistname5',artist: 'artisit5',album: 'album5', id: 8}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  updatePlaylistName (name) {
    this.setState({name: name})
  } 

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id );
    this.setState({playlistTracks: tracks});
  }

  savePlaylist() {
    
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} 
            onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
