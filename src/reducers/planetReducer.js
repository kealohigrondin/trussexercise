import _ from "lodash";
import { GET_PLANETS } from "../actions/types";

const INITIAL_STATE = {};

const planetReducer = (state = INITIAL_STATE, action) => {
  //use switch so we can add new cases in future like getting one planet
  switch (action.type) {
    case GET_PLANETS:
      //map thru the list of keys from the response object and add each to the state
      //as a key value pair of id:payload (payload being the planet object)      
      return { ...state, ..._.mapKeys(action.payload, "name") };
    default:
      return state;
  }
};

export default planetReducer;
