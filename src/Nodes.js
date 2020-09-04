import React, {Fragment} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {listBeerNodes} from './graphql/queries.js'
import Taps from './Taps'

class Nodes extends React.Component {
    
    constructor(props) {
        super(props)
        console.log("props:")
        console.log(props.toString())
        this.state = { loading: true, title: null}
    }

    getNodes = () => {
        API.graphql(graphqlOperation(listBeerNodes)).then(response => this.setState({loading: false, nodes: response.data.listBeerNodes.items}))
    }

    componentDidMount() {
        this.getNodes()
    }
    
    renderNodes = items => {
        return (
            <Fragment>
                {
                    items.map(nodeItem => (
                        <Taps key={nodeItem.id} beerNodeID={nodeItem.id} NodeName={nodeItem.deviceCommonName} />
                    ))
                }
            </Fragment>
        )
    }

    render() {
        const { loading, nodes} = this.state;

        return (
            <Fragment>
                <h1>
                    Beer list
                </h1>
                {loading ? "Loading..." : this.renderNodes(nodes)}
            </Fragment>
        );
            
    }
}

export default Nodes