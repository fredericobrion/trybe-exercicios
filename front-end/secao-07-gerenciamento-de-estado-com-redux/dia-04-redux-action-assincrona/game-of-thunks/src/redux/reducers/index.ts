import { AnyAction } from 'redux';
import { SEARCH_BEGIN, SEARCH_ERROR, SEARCH_SUCCESS } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  character: '',
  error: null,
};

function characterReducer(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case SEARCH_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
      case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        character: action.character,
      }
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default characterReducer;
