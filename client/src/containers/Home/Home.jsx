import React, { Fragment, useEffect, lazy } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/users/actionFetchUser";
import { useAuth0 } from "@auth0/auth0-react";
import { jwtDecode } from "jwt-decode";
import { getTokens } from "../../redux/actions/tokens/actionsFetchTokens";

const Header = lazy(() => import("../../components/Header/Header"));

const Home = () => {
  // const { currentUser } = useSelector((state) => state)
  const dispatch = useDispatch();
  const { logout, getAccessTokenSilently, getIdTokenClaims } = useAuth0();

  const fetchAccessToken = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      const idTokenClaims = await getIdTokenClaims();
      const idToken = idTokenClaims.__raw;

      dispatch(getTokens(accessToken, idToken));
    } catch (error) {
      console.error("Erreur lors de la récupération du token:", error);
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("accessToken");
  };

  fetchAccessToken();

  return (
    <Fragment>
      <Header
        data={{
          firstname: "John",
          lastname: "Doe",
        }}
        disconnect={() => handleLogout()}
      />
      <Outlet />
    </Fragment>
  );
};

export default Home;
