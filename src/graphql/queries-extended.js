export const getBeerNodeWithBeers = /* GraphQL */ `
  query GetBeerNode($id: ID!) {
    getBeerNode(id: $id) {
      id
      deviceId
      deviceCommonName
      createdAt
      updatedAt
      taps {
        items {
          id
          beerNodeID
          name
          maxCapacity
          currentCapacity
          ticksPerLiter
          currentBeerID
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
          }
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;