import React from 'react';
import ReactDOM from 'react-dom';
import { Content } from 'reactjs-admin-lte';

class TextInputForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      testInput1: '',
    }
  }

  handleChange = (e) => {
    var key = e.target.name
    var val = e.target.value
    var obj  = {}
    obj[key] = val
    this.setState(obj)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    var val = this.state
    this.props.callbackFromParent(val.testInput1)
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <div className="box box-primary">
            <div className="box-body">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                    type="text"
                    className="ob-txt"
                    name="testInput1"
                    id="testInput1"
                    value={this.state.testInput1}
                    onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-success btn-flat">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextInputForm;
