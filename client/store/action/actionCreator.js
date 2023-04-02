import { BaseUrl } from "../../components/baseUrl";
import { DETAIL_MOVIE_SUCCES, FETCH_MOVIE_SUCCESS } from "./actionType";

export const fectMovie = (payload) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload,
  };
};

export const detailMovie = (payload) => {
  return {
    type: DETAIL_MOVIE_SUCCES,
    payload,
  };
};

export const showMovie = () => {
  return (dispatch) => {
    fetch(BaseUrl + "/movies/pub/fetchmovie", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {
        const action = fectMovie(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const movieDetail = (id) => {
  return (dispatch) => {
    fetch(BaseUrl + "/movies/pub/detail/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {
        const action = detailMovie(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
