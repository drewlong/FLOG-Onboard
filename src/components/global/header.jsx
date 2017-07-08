import React from 'react';
import ReactDOM from 'react-dom';
import { MainHeader } from 'reactjs-admin-lte';

class Header extends React.Component {
  render(){
    return(
      <MainHeader>
        <MainHeader.Logo>Foodilog</MainHeader.Logo>
      </MainHeader>
    )
  }
}

export default Header;
