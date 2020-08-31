import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import Nodes from './Nodes';
import config from './aws-exports';
import { setupAPI } from './auth';



function App() {
  setupAPI();
  Amplify.configure(config)

  
  return (
    <div className="App">
      <header className="App-header">  
        <Nodes />
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
