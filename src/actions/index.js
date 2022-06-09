import swapi from "../api/swapi";
import { GET_PLANETS, GET_PLANETS_ERROR } from "./types";

export const getPlanets = () => async (dispatch) => {
  swapi
    .get("/planets")
    .then((response) => {
      dispatch({ type: GET_PLANETS, payload: response.data.results });
    })
    .catch((err) => {
      console.log("hello", err.response);
      dispatch({ type: GET_PLANETS_ERROR, payload: GET_PLANETS_ERROR});
    });
  // some kind of error state when the swapi call is blocked
};
