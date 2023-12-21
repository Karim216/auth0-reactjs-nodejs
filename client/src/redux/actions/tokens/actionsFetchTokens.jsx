import {
  FETCH_ACCESS_TOKEN_LOADING,
  FETCH_ACCESS_TOKEN_SUCCESS,
  FETCH_ACCESS_TOKEN_ERROR,
} from "../../constants";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const fetchAccessTokenLoading = () => {
  return {
    type: FETCH_ACCESS_TOKEN_LOADING,
  };
};

const fetchAccessTokenSuccess = (data) => {
  return {
    type: FETCH_ACCESS_TOKEN_SUCCESS,
    payload: data,
  };
};

const fetchAccessTokenError = (error) => {
  return {
    type: FETCH_ACCESS_TOKEN_ERROR,
    payload: error,
  };
};

export const getTokens = (accessToken, idToken) => {

  return async (dispatch) => {
    dispatch(fetchAccessTokenLoading());
    try {
      // const accessToken = await getAccessTokenSilently();
      // const idTokenClaims = await getIdTokenClaims()
      // const idToken = idTokenClaims.__raw;

      dispatch(fetchAccessTokenSuccess({
        accessToken: accessToken,
        idToken: idToken
      }));
    } catch (error) {
      dispatch(fetchAccessTokenError("Erreur lors de la récupération du token: " + error));
    }
  };
};
