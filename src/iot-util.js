import Amplify, { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';
import { getCurrentCredentials } from './auth';

export const attachIoTPolicy = () => (
    new Promise((resolve, reject) => {
      getCurrentCredentials()
        .then((credentials) => {
          Amplify.addPluggable(new AWSIoTProvider({
            aws_pubsub_region: 'us-east-1',
            aws_pubsub_endpoint: 'wss://${process.env.AWS_IOT_MQTT_ID}.iot.${process.env.AWS_APP_REGION}.amazonaws.com/mqtt',
            credentials,
          }))
          resolve()
        })
        .catch((error) => {
          console.log('Error when getting credentials in order to attach an Iot policy', error);
          reject(error)
        })  
    })
  )
  
  export const IOTSubscribeToMultipleTopics = (topics, messageHandler) => {
    attachIoTPolicy()
      .then(() => {
        PubSub.subscribe(topics).subscribe({
          next: (data) => {
            console.log('message received', data);
            if (messageHandler) {
              setTimeout(function () {
                messageHandler(data);
                console.log('refreshing')
              }, 2000)
            } 
          },
          error: error => console.error(error),
          close: () => console.log('Done'),
        })
      })
  }