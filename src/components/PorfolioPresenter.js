import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/Authcontext';
import profileDb from './ProfileInfo'

// when this component wraps a different component it dosent present it if the user isn't connected

const PortfolioPresenter = ({portfolio_link ,children }) => {
  const { user } = UserAuth();
//   console.log(children)
//   console.log(portfolio_link)


  const [portfolio_data, setPortfolioData] = useState([])
//   console.log(portfolio_data)

  useEffect(() => {
      if (portfolio_link){
          setPortfolioData(children)
      }
      else{
          setPortfolioData("null")
      }
  }, []);
// console.log(portfolio_data)
return portfolio_data
};

export default PortfolioPresenter;