import swapi from "../api/swapi"
import { GET_PLANETS } from "./types";

export const getPlanets = () => async (dispatch) => {
    const response = await swapi.get('/planets');
    dispatch({type: GET_PLANETS, payload: response.data.results});
    // some kind of error state when the swapi call is blocked
}