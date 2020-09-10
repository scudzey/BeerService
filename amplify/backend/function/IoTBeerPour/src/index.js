/* Amplify Params - DO NOT EDIT
	API_BEERSERVICE_GRAPHQLAPIENDPOINTOUTPUT
	API_BEERSERVICE_GRAPHQLAPIIDOUTPUT
Amplify Params - DO NOT EDIT */
require('isomorphic-fetch');
const AWS = require('aws-sdk/global');
const AUTH_TYPE = require('aws-appsync').AUTH_TYPE;
const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');

const config = {
    url: process.env.API_BEERSERVICE_GRAPHQLAPIENDPOINTOUTPUT,
    region: process.env.REGION,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: AWS.config.credentials,
    },
    disableOffline: true
  };
const nodesByDeviceId = /* GraphQL */ 
`query NodesByDeviceId(
    $deviceId: String
    $sortDirection: ModelSortDirection
    $filter: ModelbeerNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    NodesByDeviceId(
      deviceId: $deviceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        taps {
          items{
              id
              currentCapacity
              name
          }
          nextToken
        }
        deviceId
        deviceCommonName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

const updateBeerTap = /* GraphQL */ `
  mutation UpdateBeerTap(
    $input: UpdateBeerTapInput!
    $condition: ModelbeerTapConditionInput
  ) {
    updateBeerTap(input: $input, condition: $condition) {
      id
      beerNodeID
      name
      tapIndex
      maxCapacity
      currentCapacity
      ticksPerLiter
      currentBeerID
      createdAt
      updatedAt
      node {
        id
        deviceId
        deviceCommonName
        createdAt
        updatedAt
        taps {
          nextToken
        }
      }
      currentBeer {
        id
        title
        description
        imageURL
        style
        brewer
        website
        abv
        ibu
        createdAt
        updatedAt
      }
    }
  }
`;

const client = new AWSAppSyncClient(config);
const mutateBeerTap = async(id,newValue, callback) => {
    try {
        console.log(`mutating tap ${id} to ${newValue}`)
        const updateResult = await client.mutate(
            {
                mutation: gql(updateBeerTap),
                variables: {
                    input: {
                      id:id,
                      currentCapacity: newValue
                    }
                }
            })
        return updateResult
    } catch (e) {
        console.warn('Error sending query: ', e);
        callback(Error(e));
    }
}

exports.handler = async (event, context, callback) => {
    // TODO implement
    if (!event['tapId'] || !event['deviceId'] || !event['count']) {
        callback(Error("tapId, deviceId, count are required fields for the event"));
        return;
    }
    const tapId = event['tapId']
    var deviceId = event['deviceId'];
    valueChange = event['count'];
    console.log("event: ");
    console.log(event);
    console.log("deviceID: ");
    console.log(deviceId);

    try {
        const result = await client.query({query:gql(nodesByDeviceId), fetchPolicy: 'network-only', variables: {deviceId:deviceId}});
        console.log(result.data);
        var findTapId = {};
        result.data.NodesByDeviceId.items[0].taps.items.map(async item => {
            console.log(`${item.name} === ${tapId}`)
            if( item.name === tapId)
            {
                findTapId = item
            }
        });

        if (findTapId){
          console.log("tap found: ");
          console.log(findTapId);
          const newValue = (findTapId.currentCapacity - valueChange);
          try{
            updateResult = await client.mutate(
              {
                  mutation: gql(updateBeerTap),
                  variables: {input:
                    {
                      id: findTapId.id,
                      currentCapacity: newValue
                    }
                  }
              });
            console.log(updateResult);
          } catch (e) {
              console.warn('Error sending query: ', e);
              callback(Error(e));
          }
          console.log(`subtract ${valueChange} from ${findTapId.currentCapacity} on tap: ${tapId}`)
        }
        return result.data
    } catch (e) {
        console.warn('Error sending query: ', e);
        callback(Error(e));
    }
    return;
};
