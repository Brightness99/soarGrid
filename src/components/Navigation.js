import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { authConstants } from '../redux/constants';

export const Navigation = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch({
      type: authConstants.LOGOUT_SUCCESS,
      payload: false,
    });
  };

  return (
    <Navbar className="nav" color="primary" fixed="true" light expand="md">
      <div className="container">
        <NavbarBrand href="/">Soar Test</NavbarBrand>
        <button onClick={logOut} className="btn btn-outline-light btn-sm ml-5">
          Logout
        </button>
      </div>
    </Navbar>
  );
};
