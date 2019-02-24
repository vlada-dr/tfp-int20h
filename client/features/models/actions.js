import {
  LOAD_MODELS, LIKE_MODELS,
} from 'types';

import { models } from 'api';

export const all = (filters) => ({
  type: LOAD_MODELS,
  payload: models.all(filters),
});

export const like = (id) => ({
  type: LIKE_MODELS,
  payload: models.like(id),
  id,
});
