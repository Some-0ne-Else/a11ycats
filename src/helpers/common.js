import { cloneDeep } from 'lodash';

function compareAsc(a, b) {
  if (a.price > b.price) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  return 0;
}

function compareDsc(a, b) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
}

function comparePop(a, b) {
  if (a.popularIndex > b.popularIndex) {
    return -1;
  }
  if (a.popularIndex < b.popularIndex) {
    return 1;
  }
  return 0;
}

const SORT_TYPE = {
  ASC: 1,
  DSC: 2,
  POP: 3,
};

export function sortCards({ cards, sortType }) {
  const deepClonedCards = cloneDeep(cards);
  switch (sortType) {
    case SORT_TYPE.ASC: {
      return deepClonedCards.sort(compareAsc);
    }
    case SORT_TYPE.DSC: {
      return deepClonedCards.sort(compareDsc);
    }
    case SORT_TYPE.POP: {
      return deepClonedCards.sort(comparePop);
    }
    default: {
      return deepClonedCards;
    }
  }
}
