import _ from "lodash";
import { GET_PLANETS, GET_PLANETS_ERROR } from "../actions/types";

const INITIAL_STATE = {};

const planetReducer = (state = INITIAL_STATE, action) => {
  //use switch so we can add new cases in future like getting one planet
  switch (action.type) {
    case GET_PLANETS:
      //map thru the list of keys from the response object and add each to the state
      //as a key value pair of id:payload (payload being the planet object)
      return { ...state, ..._.mapKeys(action.payload, "name") };
    case GET_PLANETS_ERROR:
      // console.log('adding message to state:', action.payload);
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default planetReducer;
