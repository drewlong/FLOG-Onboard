import React from 'react';
import { Content } from 'reactjs-admin-lte';
import BasicInfo from './basicinfo.jsx'
import Results from './results.jsx'
import MoreInfo from './moreinfo.jsx'
import MenuBuilder from './menubuilder.jsx'

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      form1res: '',
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      stepFour: false,
      loading: false,
      height: 0,
    }
  }

  calcHeight = (node) => {
    setTimeout(() => {
        if (node && !this.state.height) {
                this.setState({
                    height: node.clientHeight
                });
        }
      }, 1);
  }


// Step Callbacks

  loadStepOne = (data) => {
    this.setState({
      form1res: data,
      stepOne: false,
      stepTwo: true,
    })
  }

  loadStepTwo = (state) => {
    this.setState({
      newRestaurant: state.newRestaurant,
      restaurant: state.restaurant,
      stepTwo: false,
    })
  }

  loadStepThree = () => {
    this.setState(
      {
        stepThree: true,
      }
    )
  }

  loadStepFour = (state) => {
   this.setState(
     {
        stepFour: true,
     }
   )
  }

  render(){
    return(
      <Content>
        <Content.Body>
{!this.state.stepThree &&
  <div id="step_one_two">
          <div className="row">
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header">
                  <div className="box-title">Basic Info</div>
                </div>
                <div className="box-body" ref={(node) => this.calcHeight(node)}>
                   <BasicInfo callbackFromParent={this.loadStepOne} />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header">
                  <div className="box-title">Results</div>
                </div>
                <div className="box-body result-inner" style={{height: this.state.height}}>
                  <Results stepTwo={this.state.stepTwo} data={this.state.form1res} loading={this.state.loading} callbackFromParent={this.loadStepTwo}/>
                </div>
              </div>
            </div>

          </div>
          <div className="row stepThree">
          {this.state.newRestaurant || this.state.restaurant != '' &&
            <div className="col-md-8 stepThreeBtn">
              <button className="btn btn-default btn-flat disabled next-btn"> Next Step </button>
            </div>
          }
          {!this.state.newRestaurant && this.state.restaurant == '' &&
            <div className="col-md-8 stepThreeBtn">
              <button className="btn btn-success btn-flat next-btn" onClick={this.loadStepThree}> Next Step </button>
            </div>
          }
          </div>
  </div> // End Steps One & Two
}

{this.state.stepThree && !this.state.stepFour &&

          <div className="row">
            <MoreInfo callbackFromParent={this.loadStepFour} />
          </div>

}

{this.state.stepFour &&

          <MenuBuilder height={this.state.height}/>

}
        </Content.Body>
      </Content>
    )
  }
}

export default Main;
