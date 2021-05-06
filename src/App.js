import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify'
import Player from './Player'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi()

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();
  //run code based on given conditiom
  useEffect(() => {
    const hash = getTokenFromUrl(null)
    window.location.hash = ''
    const _token = hash.access_token
    if (_token) {
      dispatch({ type: 'SET_TOKEN', token: _token })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log('user - ', user)
        dispatch({ type: 'SET_USER', user })
      });
    }
    console.log("🚀 ~ file: App.js ~ line 10 ~ useEffect ~ token", _token)
  }, []);
  console.log("🚀 ~ user at end", user)
  console.log("🚀 ~ token at end", token)
  return (
    <div className="app">
      {
        token ?
          <Player spotify={spotify} />
          :
          <Login />
      }

    </div>
  );
}

export default App;
