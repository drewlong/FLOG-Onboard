import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from 'reactjs-admin-lte';

class Header extends React.Component {
  render(){
    return(
      <div className="row">
        <div className="col-md-12 spinner">
          <img src="dist/img/spin.gif" />
        </div>
      </div>
    )
  }
}

export default Header;
