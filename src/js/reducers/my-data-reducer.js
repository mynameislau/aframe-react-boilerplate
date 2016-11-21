import { List } from 'Immutable';

const defaultState = List([]);

export const myDataReducer = (prevState = defaultState, action) => {
  const payload = action.payload;
  const type = action.type;

  switch (type) {
    default:
      return prevState;

  }
};
