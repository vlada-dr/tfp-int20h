import { LOAD_MODELS } from 'types';

export const modelReducer = (
  state = {
    models: [],
    filters: {
      modelAttributes: [],
      country: '',
      city: '',
      page: 1,
      pageSize: 20,
    },
  },
  action,
) => {
  const { list } = state;

  switch (action.type) {
    case LOAD_MODELS:
      return {
        ...state,
        models: action.payload,
      };
    default:
      return state;
  }
};
