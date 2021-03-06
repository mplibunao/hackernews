import { sortBy } from 'lodash';

// Object containing the different sort functions by category
export const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
  POINTS: list => sortBy(list, 'points').reverse(),
};

export const updateSortState = (newSortKey) => (prevState) => {
  const { sortKey, isSortReverse } = prevState;
  const newSortOrder = sortKey === newSortKey && !isSortReverse;
  return {
    sortKey: newSortKey,
    isSortReverse: newSortOrder
  };
};

export const caretClass = isSortReverse => isSortReverse ? 'fa fa-caret-up' : 'fa fa-caret-down';