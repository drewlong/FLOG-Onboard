import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from 'reactjs-admin-lte';

class Lookup extends React.Component{
  render(){
    return(
      <div className="col-md-6">
        <button className="btn btn-block btn-success btn-flat next-btn" type="submit">
          Search
        </button>
      </div>
    )
  }
}

export default Lookup;
