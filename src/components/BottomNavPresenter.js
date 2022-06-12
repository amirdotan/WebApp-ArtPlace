import React from 'react';
import { UserAuth } from '../context/Authcontext';

// when this component wraps a different component it dosent present it if the user isn't connected

const BottomNavPresenter = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return null;
  }
  return children;
};

export default BottomNavPresenter;