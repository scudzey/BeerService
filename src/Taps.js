import React, {Fragment} from 'react';
import Amplify, { API, Auth, PubSub } from 'aws-amplify';
import { IOTSubscribeToMultipleTopics } from './iot-util.js';

class Taps extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { loading: true, title: null}

        
        
    }

    componentDidMount() {
        Auth.currentCredentials().then((info) => {
            const cognitoIdentityId = info.identityId;
          });
        var tapUpdate = this.tapUpdate.bind(this)
        Auth.currentCredentials().then((info) => {
            const cognitoIdentityId = info.identityId;
            API.get('test2', '/test2/updateconfig', {
              headers: { 
                "clientId": cognitoIdentityId
              }
            }).then( () => {
              IOTSubscribeToMultipleTopics(['tapSensor/#'], tapUpdate)
            }).catch(error => {
              console.log("Error: ", error)
            })
          })
        this.getTaps()
    }

    tapUpdate() {
        this.getTaps()
    }

    getJwtToken() {
        try {
            return (Auth.currentSession()).idToken.jwtToken
        } catch (error) {
            console.log('error signing in', error)
        }
    }

    getTaps = () => {
        API.get('test2', '/test2/taps', {})
            .then( response => this.setState({ loading: false, data: response}))
    }

    getPints = item => {
        let pintsRemaining = ((item.CurrentCapacity/6) /473.176).toFixed(2)
        return pintsRemaining
    }

    getPercentage = item => {
        let percentage = ((item.CurrentCapacity / item.CapacityMax) * 100).toFixed(2)
        return percentage
    }

    renderList = data => {
        
        return (
            <ul>
                {data.taps.map(item => (
                     
                    <li style={{ listStyle: "none" }} key={item.BeerTapID}>
                        {`${item.BeerName} - Pints: ${this.getPints(item)}  - (${this.getPercentage(item)}%)`}
                    </li>
                ))}
            </ul>
        );
    };



    render() {
        const { loading, data} = this.state;

        return (
            <Fragment>
                <h2>
                    Beer list
                </h2>
                {loading ? "Loading..." : this.renderList(data)}
            </Fragment>
        );
    }
}

export default Taps