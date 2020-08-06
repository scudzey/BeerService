import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify, { Auth, API } from 'aws-amplify';
import Taps from './Taps'

function App() {
  Amplify.configure({
    API: {
      endpoints: [
        {
          name: "test2",
          endpoint: "https://***REMOVED***.execute-api.us-east-1.amazonaws.com",
          custom_header: async () => {
           return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
          }
        }
      ]
    }
  })
  
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
