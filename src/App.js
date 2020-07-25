import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import * as SWRTC from '@andyet/simplewebrtc';
import logo from './logo.svg';
import './App.css';


// ====================================================================
// IMPORTANT SETUP
// ====================================================================
// Replace `YOUR_API_KEY` here with the API key you received when
// signing up for SimpleWebRTC
// --------------------------------------------------------------------
const API_KEY = '1ecf95c3d1454c0df180cd39';
// ====================================================================

const ROOM_NAME = 'test_room';
const ROOM_PASSWORD = '21324132';
const CONFIG_URL = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;

const store = SWRTC.createStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
    <SWRTC.Provider configUrl={CONFIG_URL}>
      {/* Render based on the connection state */}
      <SWRTC.Connecting>
        <h1>Connecting...</h1>
      </SWRTC.Connecting>

      <SWRTC.Connected>
        <h1>Connected!</h1>
        {/* Request the user's media */}
        <SWRTC.RequestUserMedia audio video auto />

        {/* Enable playing remote audio. */}
        <SWRTC.RemoteAudioPlayer />

        {/* Connect to a room with a name and optional password */}
        <SWRTC.Room name={ROOM_NAME} password={ROOM_PASSWORD}>
          {props => {
            /* Use the rest of the SWRTC React Components to render your UI */
          }}
        </SWRTC.Room>
      </SWRTC.Connected>
    </SWRTC.Provider>
  </Provider>
    </div>
    
  );
}






export default App;


