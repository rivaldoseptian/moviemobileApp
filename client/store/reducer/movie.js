import { DETAIL_MOVIE_SUCCES, FETCH_MOVIE_SUCCESS } from "../action/actionType";

const initialState = {
  movies: [],
  movie: {},
};
function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case DETAIL_MOVIE_SUCCES:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
}

export default movieReducer;
