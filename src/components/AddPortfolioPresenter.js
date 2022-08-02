import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/Authcontext';

// when this component wraps a different component it dosent present it if the user isn't connected

const AddPortfolioPresenter = ({portfolio_link ,children }) => {
  const { user } = UserAuth();
//   console.log(children)
  console.log(portfolio_link)

<<<<<<< Updated upstream
=======
console.log(portfolio_link)
>>>>>>> Stashed changes
    if (!portfolio_link){
        console.log(portfolio_link)
        return children
    }
<<<<<<< Updated upstream
=======
    else{
        return 'null'
    }
>>>>>>> Stashed changes
};

export default AddPortfolioPresenter;