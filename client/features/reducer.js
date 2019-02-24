import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
  REGISTER,
  LIKE_MODELS,
  LOAD_USER,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from 'types'


export const commonReducer = (state = {
  userLikes: [],
  notification: {},
}, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case LIKE_MODELS:
      return {
        ...state,
        user: action.payload,
      };
    case LOAD_USER:
      return {
        ...state,
        user: action.error ? null : action.payload,
        redirectTo: action.payload ? action.payload.id : '',
      };
    case LOGOUT:
      return { ...state, user: null };
    case LOGIN:
      return {
        ...state,
        redirectTo: action.error ? null : `/user/${action.payload.username}`,
        user: action.payload.user,
      };
    case REGISTER:
      return {
        ...state,
        redirectTo: action.error ? null : `/user/${action.payload.username}`,
        user: action.payload.user,
      };
    case ADD_NOTIFICATION:
      return {
        ...state,
        notification: {
          message: action.message,
          type: action.status,
          content: action.content,
        },
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notification: {},
      };
    default:
      return state
  }
}
