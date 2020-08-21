import Amplify, { Auth } from 'aws-amplify';

export const setupAPI = () => {
    Amplify.configure({
        API: {
          endpoints: [
            {
              name: "test2",
              endpoint: `https://${process.env.AWS_REST_ENDPOINT_ID}.execute-api.${process.env.AWS_APP_REGION}.amazonaws.com`,
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
  
