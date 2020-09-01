/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBeerCategory = /* GraphQL */ `
  mutation CreateBeerCategory(
    $input: CreateBeerCategoryInput!
    $condition: ModelbeerCategoryConditionInput
  ) {
    createBeerCategory(input: $input, condition: $condition) {
      id
      style
      createdAt
      updatedAt
    }
  }
`;
export const updateBeerCategory = /* GraphQL */ `
  mutation UpdateBeerCategory(
    $input: UpdateBeerCategoryInput!
    $condition: ModelbeerCategoryConditionInput
  ) {
    updateBeerCategory(input: $input, condition: $condition) {
      id
      style
      createdAt
      updatedAt
    }
  }
`;
export const deleteBeerCategory = /* GraphQL */ `
  mutation DeleteBeerCategory(
    $input: DeleteBeerCategoryInput!
    $condition: ModelbeerCategoryConditionInput
  ) {
    deleteBeerCategory(input: $input, condition: $condition) {
      id
      style
      createdAt
      updatedAt
    }
  }
`;
export const createBeerBrewer = /* GraphQL */ `
  mutation CreateBeerBrewer(
    $input: CreateBeerBrewerInput!
    $condition: ModelbeerBrewerConditionInput
  ) {
    createBeerBrewer(input: $input, condition: $condition) {
      id
      brewer
      createdAt
      updatedAt
    }
  }
`;
export const updateBeerBrewer = /* GraphQL */ `
  mutation UpdateBeerBrewer(
    $input: UpdateBeerBrewerInput!
    $condition: ModelbeerBrewerConditionInput
  ) {
    updateBeerBrewer(input: $input, condition: $condition) {
      id
      brewer
      createdAt
      updatedAt
    }
  }
`;
export const deleteBeerBrewer = /* GraphQL */ `
  mutation DeleteBeerBrewer(
    $input: DeleteBeerBrewerInput!
    $condition: ModelbeerBrewerConditionInput
  ) {
    deleteBeerBrewer(input: $input, condition: $condition) {
      id
      brewer
      createdAt
      updatedAt
    }
  }
`;
export const createBeerTap = /* GraphQL */ `
  mutation CreateBeerTap(
    $input: CreateBeerTapInput!
    $condition: ModelbeerTapConditionInput
  ) {
    createBeerTap(input: $input, condition: $condition) {
      id
      beerNodeID
      name
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
export const updateBeerTap = /* GraphQL */ `
  mutation UpdateBeerTap(
    $input: UpdateBeerTapInput!
    $condition: ModelbeerTapConditionInput
  ) {
    updateBeerTap(input: $input, condition: $condition) {
      id
      beerNodeID
      name
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
export const deleteBeerTap = /* GraphQL */ `
  mutation DeleteBeerTap(
    $input: DeleteBeerTapInput!
    $condition: ModelbeerTapConditionInput
  ) {
    deleteBeerTap(input: $input, condition: $condition) {
      id
      beerNodeID
      name
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
export const createBeerNode = /* GraphQL */ `
  mutation CreateBeerNode(
    $input: CreateBeerNodeInput!
    $condition: ModelbeerNodeConditionInput
  ) {
    createBeerNode(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateBeerNode = /* GraphQL */ `
  mutation UpdateBeerNode(
    $input: UpdateBeerNodeInput!
    $condition: ModelbeerNodeConditionInput
  ) {
    updateBeerNode(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteBeerNode = /* GraphQL */ `
  mutation DeleteBeerNode(
    $input: DeleteBeerNodeInput!
    $condition: ModelbeerNodeConditionInput
  ) {
    deleteBeerNode(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createBeerDefinition = /* GraphQL */ `
  mutation CreateBeerDefinition(
    $input: CreateBeerDefinitionInput!
    $condition: ModelbeerDefinitionConditionInput
  ) {
    createBeerDefinition(input: $input, condition: $condition) {
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
export const updateBeerDefinition = /* GraphQL */ `
  mutation UpdateBeerDefinition(
    $input: UpdateBeerDefinitionInput!
    $condition: ModelbeerDefinitionConditionInput
  ) {
    updateBeerDefinition(input: $input, condition: $condition) {
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
export const deleteBeerDefinition = /* GraphQL */ `
  mutation DeleteBeerDefinition(
    $input: DeleteBeerDefinitionInput!
    $condition: ModelbeerDefinitionConditionInput
  ) {
    deleteBeerDefinition(input: $input, condition: $condition) {
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
export const createBeerDrinker = /* GraphQL */ `
  mutation CreateBeerDrinker(
    $input: CreateBeerDrinkerInput!
    $condition: ModelbeerDrinkerConditionInput
  ) {
    createBeerDrinker(input: $input, condition: $condition) {
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
export const updateBeerDrinker = /* GraphQL */ `
  mutation UpdateBeerDrinker(
    $input: UpdateBeerDrinkerInput!
    $condition: ModelbeerDrinkerConditionInput
  ) {
    updateBeerDrinker(input: $input, condition: $condition) {
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
export const deleteBeerDrinker = /* GraphQL */ `
  mutation DeleteBeerDrinker(
    $input: DeleteBeerDrinkerInput!
    $condition: ModelbeerDrinkerConditionInput
  ) {
    deleteBeerDrinker(input: $input, condition: $condition) {
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
