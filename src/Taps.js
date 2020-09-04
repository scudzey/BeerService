import React, {Fragment} from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import {getBeerNode} from './graphql/queries.js'
import {updateBeerTap} from './graphql/mutations'
import * as subscriptions from './graphql/subscriptions'
import TapElement from './TapElement.js';
import { getBeerNodeWithBeers } from './graphql/queries-extended.js';

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
        if(!tapData || !tapData.id){
            return;
        }
        const tapIndex = this.state.taps.findIndex(element => element.id === tapData.id);
        let newTapArray = [...this.state.taps]
        newTapArray[tapIndex] = {...newTapArray[tapIndex], ...tapData}
        this.setState({taps: newTapArray})
    }

    getTaps = () => {
        API.graphql(graphqlOperation(getBeerNode, {id: this.state.beerNodeID})).then(response => {
            this.setOwnerFlag(response.data.getBeerNode.ownerUsername)
            this.setState({ loading: false, beerNode: response.data.getBeerNode, taps: response.data.getBeerNode.taps.items}) 
        }).catch(err => console.log(err))
    }

    getPints = item => {
        let pintsRemaining = ((item.currentCapacity/6) /473.176).toFixed(2)
        return pintsRemaining
    }

    getPercentage = item => {
        let percentage = ((item.currentCapacity / item.maxCapacity) * 100).toFixed(2)
        return percentage
    }

    renderSubHeader = tap => {
        return `ABV: ${tap.currentBeer.avb}% -- IBU:${tap.currentBeer.ibu}`
    }
    
    renderPints = tap => {
        return `Pints Remaining: ${this.getPints(tap)}`
    }

    renderPercentage = tap => {
        return `${this.getPercentage(tap)}%`
    }
    
    setOwnerFlag = ownerName => {
        if (!ownerName){
            return false;
        }
        Auth.currentAuthenticatedUser().then(
            user => {
                const currentUserString = user.getUsername()
                this.setState({isOwner: (ownerName === currentUserString)})
        }).catch(err => console.log(err))
    }
    
    renderList = taps => { 
        return (
                <TapElement taps={taps} isOwner={this.state.isOwner} editSubmitCallback={this.handleEditSubmit.bind(this)}/>
        );
    };

    subscribeTaps = async () => await API.graphql(
        graphqlOperation(subscriptions.onUpdateBeerTap)
    ).subscribe({
        next: (tapData) => {
            this.tapUpdate(tapData.value.data.onUpdateBeerTap)
        }
    })

    handleEditSubmit = (tap, beerId, size) =>
    {
        console.log("saving tap update")
        console.log(tap)
        console.log(beerId)
        console.log(size)
        API.graphql(graphqlOperation(updateBeerTap,{input:{
            id:tap.id,
            currentBeerID:beerId,
            currentCapacity:size.currentCapacity,
            maxCapacity:size.maxCapacity
        }}))
    }

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