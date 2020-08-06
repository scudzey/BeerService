import Amplify, { Auth } from 'aws-amplify';

export const setupAPI = () => {
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
}

export const getCurrentCredentials = () => (
    new Promise((resolve, reject) => {
      Auth.currentCredentials()
        .then(creds => resolve(creds))
        .catch(error => reject(error));
}))
  
