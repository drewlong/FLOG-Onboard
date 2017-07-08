import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from 'reactjs-admin-lte';

class Results extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      restaurant: '',
      newRestaurant: false,
    }
  }

  flagNewRestaurant = () => {
    this.setState(
      {
        restaurant: '',
        newRestaurant: true,
      }
    )
    this.props.callbackFromParent(this.state)
  }

  flagRestaurant = (e) => {
    this.setState(
      {
        restaurant: e.target.name,
        newRestaurant: false,
      }
    )
    this.props.callbackFromParent(this.state)
  }

  handleReset = () => {
    this.setState(
      {
        restaurant: '',
        newRestaurant: false,
      }
    )
    this.props.callbackFromParent(this.state)
  }

  render(){
    return(
          <div>
          <div className="row ob-row">
          { this.props.loading &&
              <div className="col-md-12" style={{textAlign: 'center', marginTop: 100}}>
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              </div>
          }
          { !this.props.loading && this.props.data != '' && !this.state.newRestaurant &&
            this.props.data.map(function(result){
              return (

                  <div className="col-md-6 ob-col">
                    <div className="box box-success">
                      <div className="box-header">
                        <div className="box-title">{result.name}</div>
                      </div>
                      <div className="box-body">
                        <p>{result.address}</p>
                        <p>{result.city}, {result.state}</p>
                      </div>
                      <div className="box-footer">
                      <div className="ob-col">
                        {this.state.restaurant == result.id &&
                          <button
                            className="btn btn-block btn-success disabled"
                            name={result.id}
                            id={"cb_"+result.id}
                            onClick={this.flagRestaurant}>

                              This is Me

                          </button>
                        }
                        {this.state.restaurant != result.id &&
                          <button
                            className="btn btn-block btn-default"
                            name={result.id}
                            id={"cb_"+result.id}
                            onClick={this.flagRestaurant}>

                              This is Me

                          </button>
                        }
                      </div>
                      </div>
                    </div>
                  </div>
              )
            }, this)
          }

         </div>
         <div className="mod-footer">
          {this.props.data == '' &&
            <button className="btn btn-danger disabled btn-flat next-btn">My Restaurant Isn't Listed</button>
          }
          {this.props.data != '' && !this.state.newRestaurant && this.state.restaurant == '' &&
            <button className="btn btn-danger btn-flat next-btn" onClick={this.flagNewRestaurant}>My Restaurant Isn't Listed</button>
          }
          {this.state.restaurant != '' &&
            <button className="btn btn-primary btn-flat next-btn" onClick={this.handleReset}>Reset</button>
          }
          {this.state.newRestaurant &&
            <button className="btn btn-primary btn-flat next-btn" onClick={this.handleReset}>Reset</button>
          }
         </div>
         </div>
    )
  }
}

export default Results;
