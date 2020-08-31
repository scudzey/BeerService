/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBeerCategory = /* GraphQL */ `
  subscription OnCreateBeerCategory {
    onCreateBeerCategory {
      id
      style
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBeerCategory = /* GraphQL */ `
  subscription OnUpdateBeerCategory {
    onUpdateBeerCategory {
      id
      style
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBeerCategory = /* GraphQL */ `
  subscription OnDeleteBeerCategory {
    onDeleteBeerCategory {
      id
      style
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBeerBrewer = /* GraphQL */ `
  subscription OnCreateBeerBrewer {
    onCreateBeerBrewer {
      id
      brewer
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBeerBrewer = /* GraphQL */ `
  subscription OnUpdateBeerBrewer {
    onUpdateBeerBrewer {
      id
      brewer
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBeerBrewer = /* GraphQL */ `
  subscription OnDeleteBeerBrewer {
    onDeleteBeerBrewer {
      id
      brewer
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBeerTap = /* GraphQL */ `
  subscription OnCreateBeerTap {
    onCreateBeerTap {
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
export const onUpdateBeerTap = /* GraphQL */ `
  subscription OnUpdateBeerTap {
    onUpdateBeerTap {
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
export const onDeleteBeerTap = /* GraphQL */ `
  subscription OnDeleteBeerTap {
    onDeleteBeerTap {
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
export const onCreateBeerNode = /* GraphQL */ `
  subscription OnCreateBeerNode {
    onCreateBeerNode {
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
export const onUpdateBeerNode = /* GraphQL */ `
  subscription OnUpdateBeerNode {
    onUpdateBeerNode {
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
export const onDeleteBeerNode = /* GraphQL */ `
  subscription OnDeleteBeerNode {
    onDeleteBeerNode {
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
export const onCreateBeerDefinition = /* GraphQL */ `
  subscription OnCreateBeerDefinition {
    onCreateBeerDefinition {
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
export const onUpdateBeerDefinition = /* GraphQL */ `
  subscription OnUpdateBeerDefinition {
    onUpdateBeerDefinition {
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
export const onDeleteBeerDefinition = /* GraphQL */ `
  subscription OnDeleteBeerDefinition {
    onDeleteBeerDefinition {
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
export const onCreateBeerDrinker = /* GraphQL */ `
  subscription OnCreateBeerDrinker {
    onCreateBeerDrinker {
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
export const onUpdateBeerDrinker = /* GraphQL */ `
  subscription OnUpdateBeerDrinker {
    onUpdateBeerDrinker {
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
export const onDeleteBeerDrinker = /* GraphQL */ `
  subscription OnDeleteBeerDrinker {
    onDeleteBeerDrinker {
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
