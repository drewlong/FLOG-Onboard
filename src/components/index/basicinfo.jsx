import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from 'reactjs-admin-lte';
import Lookup from './lookup.jsx';
import Base64 from 'base-64';
import http from 'axios';

class BasicInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      restaurantName: '',
      restaurantAddress_street1: '',
      restaurantAddress_city: '',
      restaurantState: '',
      restaurantAddress_zip: '',
      loading: false,
      jsonData: '',
      height: 0,
      stepOne: true,
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
    var address = val.restaurantName + "|" + val.restaurantAddress_street1 + ", " + val.restaurantAddress_city + ", " + val.restaurantState + ", " + val.restaurantAddress_zip
    var req = Base64.encode(address)
    var t = this
    this.setState(
      {
        loading: true,
        stepOne: false,
      }
    )

    http.get('http://45.63.0.72/lookup/'+req, {
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(function (response) {
      t.setState({loading: false, stepTwo: true, jsonData: response.data});
      t.props.callbackFromParent(response.data);
        //alert(JSON.stringify(response.data));
      }).catch(function (error) {
      alert(error);
    })

  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} id="step1">
         <div className="row ob-row basic-info">
           <div className="col-md-12">
             <label>Restaurant Name</label><br />
             <input
               type="text"
               className="ob-txt"
               name="restaurantName"
               id="RestaurantName"
               value={this.state.restaurantName}
               onChange={this.handleChange}
               />
           </div>
         </div>

         <div className="row ob-row">
           <div className="col-md-12">
             <label>Address Line 1</label><br />
             <input
             type="text"
             className="ob-txt"
             name="restaurantAddress_street1"
             id="RestaurantName"
             value={this.state.restaurantAddress_street1}
             onChange={this.handleChange}
             />
           </div>
         </div>
         <div className="row ob-row">
           <div className="col-md-12">
             <label>Address Line 2</label><br />
             <input
             type="text"
             className="ob-txt"
             name="restaurantAddress_street2"
             id="RestaurantStreet2"
             value={this.state.restaurantAddress_street2}
             onChange={this.handleChange}
             />
           </div>
         </div>
         <div className="row ob-row">
           <div className="col-md-6">
             <label>City</label><br />
             <input
             type="text"
             className="ob-txt"
             name="restaurantAddress_city"
             id="RestaurantCity"
             value={this.state.restaurantAddress_city}
             onChange={this.handleChange}
             />
           </div>
           <div className="col-md-6">
             <label>State</label><br />
             <select id="RestaurantState" name="restaurantState"
             value={this.state.restaurantState}
             onChange={this.handleChange}
             >
               <option selected>Choose...</option>
               <option value="AL">AL - Alabama</option>
               <option value="AK">AK - Alaska</option>
               <option value="AZ">AZ - Arizona</option>
               <option value="AR">AR - Arkansas</option>
               <option value="CA">CA - California</option>
               <option value="CO">CO - Colorado</option>
               <option value="CT">CT - Connecticut</option>
               <option value="DE">DE - Delaware</option>
               <option value="FL">FL - Florida</option>
               <option value="GA">GA - Georgia</option>
               <option value="HI">HI - Hawaii</option>
               <option value="ID">ID - Idaho</option>
               <option value="IL">IL - Illinois</option>
               <option value="IN">IN - Indiana</option>
               <option value="IA">IA - Iowa</option>
               <option value="KS">KS - Kansas</option>
               <option value="KY">KY - Kentucky</option>
               <option value="LA">LA - Louisiana</option>
               <option value="ME">ME - Maine</option>
               <option value="MD">MD - Maryland</option>
               <option value="MA">MA - Massachusetts</option>
               <option value="MI">MI - Michigan</option>
               <option value="MN">MN - Minnesota</option>
               <option value="MS">MS - Mississippi</option>
               <option value="MO">MO - Missouri</option>
               <option value="MT">MT - Montana</option>
               <option value="NE">NE - Nebraska</option>
               <option value="NV">NV - Nevada</option>
               <option value="NH">NH - New Hampshire</option>
               <option value="NJ">NJ - New Jersey</option>
               <option value="NM">NM - New Mexico</option>
               <option value="NY">NY - New York</option>
               <option value="NC">NC - North Carolina</option>
               <option value="ND">ND - North Dakota</option>
               <option value="OH">OH - Ohio</option>
               <option value="OK">OK - Oklahoma</option>
               <option value="OR">OR - Oregon</option>
               <option value="PA">PA - Pennsylvania</option>
               <option value="RI">RI - Rhode Island</option>
               <option value="SC">SC - South Carolina</option>
               <option value="SD">SD - South Dakota</option>
               <option value="TN">TN - Tennessee</option>
               <option value="TX">TX - Texas</option>
               <option value="UT">UT - Utah</option>
               <option value="VT">VT - Vermont</option>
               <option value="VA">VA - Virginia</option>
               <option value="WA">WA - Washington</option>
               <option value="WV">WV - West Virginia</option>
               <option value="WI">WI - Wisconsin</option>
               <option value="WY">WY - Wyoming</option>
               <option value="DC">DC - District of Columbia</option>
             </select>
           </div>
         </div>
         <div className="row ob-row" style={{marginBottom: this.state.height}}>
           <div className="col-md-6">
             <label>Zip Code</label><br />
             <input
             type="text"
             className="ob-txt"
             name="restaurantAddress_zip"
             id="RestaurantZip"
             value={this.state.restaurantAddress_zip}
             onChange={this.handleChange}
             />
           </div>
         </div>
         <div className="mod-footer" ref={(node) => this.calcHeight(node)}>
           {this.state.stepOne &&
             <button className="btn btn-flat btn-success next-btn">Search</button>
           }
           {!this.state.stepOne &&
             <button className="btn btn-flat btn-primary next-btn">Search</button>
           }
         </div>
      </form>
    )
  }
}

export default BasicInfo;
