// TODO: add and export your own actions
import cities from "../../data/cities";

function setCities() {
  return {
    type: "SET_CITIES",
    payload: cities,
  };
}

function selectCity() {
  return {
    type: "SELECT_CITY",
    payload: city,
  };
}

export { setCities, selectCity };
