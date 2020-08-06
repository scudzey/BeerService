import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth, API, PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';
import Taps from './Taps';
import { setupAPI } from './auth';

function App() {
  setupAPI();
  
  return (
    <div className="App">
      <header className="App-header">  
        <Taps />
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
