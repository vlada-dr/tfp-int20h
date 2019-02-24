import { combineReducers } from 'redux';
import { userReducer as user } from 'features/user/reducer';
import { authReducer as auth } from 'features/auth/reducer';
import { commonReducer as common } from 'features/reducer';
import { modelReducer as model } from 'features/models/reducer';


export const reducer = combineReducers({
  auth,
  common,
  user,
  model,
});
