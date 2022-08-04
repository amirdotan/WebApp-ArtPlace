import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/Authcontext';

// when this component wraps a different component it dosent present it if the user isn't connected

const PortfolioPresenter = ({portfolio_link ,children }) => {

    if (portfolio_link){
        return children
    }
};

export default PortfolioPresenter;