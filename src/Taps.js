import React, {Fragment} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {getBeerNode} from './graphql/queries.js'
import * as subscriptions from './graphql/subscriptions'

class Taps extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { loading: true, title: null, beerNodeID:props.beerNodeID, NodeName:props.NodeName, taps:[]}     
    }

    componentDidMount() {
        this.getTaps()
        this.subscribeTaps()
    }

    tapUpdate(tapData) {
        const tapIndex = this.state.taps.findIndex(element => element.id === tapData.id);
        let newTapArray = [...this.state.taps]
        newTapArray[tapIndex] = {...newTapArray[tapIndex], currentCapacity: tapData.currentCapacity}
        this.setState({taps: newTapArray})
    }

    getTaps = () => {
        API.graphql(graphqlOperation(getBeerNode, {id: this.state.beerNodeID})).then(response => this.setState({ loading: false, taps: response.data.getBeerNode.taps.items}) )
    }

    getPints = item => {
        let pintsRemaining = ((item.currentCapacity/6) /473.176).toFixed(2)
        return pintsRemaining
    }

    getPercentage = item => {
        let percentage = ((item.currentCapacity / item.maxCapacity) * 100).toFixed(2)
        return percentage
    }

    renderList = taps => {
        return (
            <ul>
                { taps.map(tap => (
                    <li style={{ listStyle: "none" }} key={tap.name}>
                        {`${tap.name} - Pints: ${this.getPints(tap)}  - (${this.getPercentage(tap)}%)`}
                    </li>
                        
                    ))
                }
            </ul>
        );
    };

    subscribeTaps = async () => await API.graphql(
        graphqlOperation(subscriptions.onUpdateBeerTap)
    ).subscribe({
        next: (tapData) => this.tapUpdate(tapData.value.data.onUpdateBeerTap)
    })



    render() {
        const { loading, taps, NodeName} = this.state;

        return (
            <Fragment>
                <h2>
                    {NodeName}
                </h2>
                {loading ? "..." : this.renderList(taps)}
            </Fragment>
        );
    }
}

export default Taps