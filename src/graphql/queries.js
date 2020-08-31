/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBeerCategory = /* GraphQL */ `
  query GetBeerCategory($id: ID!) {
    getBeerCategory(id: $id) {
      id
      style
      createdAt
      updatedAt
    }
  }
`;
export const listBeerCategorys = /* GraphQL */ `
  query ListBeerCategorys(
    $filter: ModelbeerCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeerCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        style
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBeerBrewer = /* GraphQL */ `
  query GetBeerBrewer($id: ID!) {
    getBeerBrewer(id: $id) {
      id
      brewer
      createdAt
      updatedAt
    }
  }
`;
export const listBeerBrewers = /* GraphQL */ `
  query ListBeerBrewers(
    $filter: ModelbeerBrewerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeerBrewers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brewer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBeerTap = /* GraphQL */ `
  query GetBeerTap($id: ID!) {
    getBeerTap(id: $id) {
      id
      beerNodeID
      name
      maxCapacity
      currentCapacity
      ticksPerLiter
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
    }
  }
`;
export const listBeerTaps = /* GraphQL */ `
  query ListBeerTaps(
    $filter: ModelbeerTapFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeerTaps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        beerNodeID
        name
        maxCapacity
        currentCapacity
        ticksPerLiter
        createdAt
        updatedAt
        node {
          id
          deviceId
          deviceCommonName
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listBeerNodes = /* GraphQL */ `
  query ListBeerNodes(
    $filter: ModelbeerNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeerNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deviceId
        deviceCommonName
        createdAt
        updatedAt
        taps {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getBeerNode = /* GraphQL */ `
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const nodesByDeviceId = /* GraphQL */ `
  query NodesByDeviceId(
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
        deviceId
        deviceCommonName
        createdAt
        updatedAt
        taps {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getBeerDefinition = /* GraphQL */ `
  query GetBeerDefinition($id: ID!) {
    getBeerDefinition(id: $id) {
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
`;
export const listBeerDefinitions = /* GraphQL */ `
  query ListBeerDefinitions(
    $filter: ModelbeerDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeerDefinitions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBeerDrinker = /* GraphQL */ `
  query GetBeerDrinker($id: ID!) {
    getBeerDrinker(id: $id) {
      id
      username
      beersConsumed {
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
      createdAt
      updatedAt
    }
  }
`;
export const listBeerDrinkers = /* GraphQL */ `
  query ListBeerDrinkers(
    $filter: ModelbeerDrinkerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeerDrinkers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        beersConsumed {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
