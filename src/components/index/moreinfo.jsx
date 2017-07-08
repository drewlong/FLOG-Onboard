import React from 'react';
import ReactDOM from 'react-dom';

class MoreInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      TakesReservations: false,
      AcceptsCreditCards: false,
      Parking: false,
      WheelchairAccess: false,
      Family: false,
      Alchohol: false,
      OutdoorSeating: false,
      Wifi: false,
      TV: false,
      PriceRangeLow: '',
      PriceRangeHigh: '',
    }
  }

    checkboxChange = (cb) => {
      this.setState(
        {
        [cb.target.id]: true,
        }
      )
    }

    loadStepFour = (e) => {
      e.preventDefault()
      this.props.callbackFromParent(this.state)
    }

    handleChange = (e) => {
      var key = e.target.name
      var val = e.target.value
      var obj  = {}
      obj[key] = val
      this.setState(obj)
    }

  render(){
    return(
      <form onSubmit={this.loadStepFour}>
        <div className="col-md-12">
          <div className="box box-primary">
            <div className="box-header">
              <div className="box-title">More Info</div>
            </div>
            <div className="box-body">

              <div className="row ob-row">
                <div className="col-md-6 ob-col">
                  <input onChange={this.checkboxChange} onChange={this.checkboxChange} type="checkbox" className="ob" name="TakesReservations" id="TakesReservations" value="yes" />
                  <label className="ob-label">Takes Reservations</label>
                </div>
                <div className="col-md-6 ob-col">
                  <input onChange={this.checkboxChange} type="checkbox" className="ob" name="AcceptsCreditCards" id="AcceptsCreditCards" value="yes" />
                  <label className="ob-label">Accepts Credit Cards</label>
                </div>
              </div>
              <div className="row ob-row">
                <div className="col-md-6 ob-col">
                  <input onChange={this.checkboxChange} type="checkbox" className="ob" name="Parking" id="Parking" value="yes" />
                  <label className="ob-label">Parking</label>
                </div>
                <div className="col-md-6 ob-col">
                  <input onChange={this.checkboxChange} type="checkbox" className="ob" name="WheelchairAccess" id="WheelchairAccess" value="yes" />
                  <label className="ob-label">Wheelchair Access</label>
                </div>
              </div>
              <div className="row ob-row">
                <div className="col-md-6 ob-col">
                  <input onChange={this.checkboxChange} type="checkbox" className="ob" name="Family" id="Family" value="yes" />
                  <label className="ob-label">Family Friendly</label>
                </div>
                <div className="col-md-6 ob-col">
                  <input onChange={this.checkboxChange} type="checkbox" className="ob" name="Alchohol" id="Alchohol" value="yes" />
                  <label className="ob-label">Serves Alchohol</label>
                </div>
              </div>
              <div className="row ob-row">
                <div className="col-md-6 ob-col">
                  <input onChange={this.checkboxChange} type="checkbox" className="ob" name="OutdoorSeating" id="OutdoorSeating" value="yes" />
                  <label className="ob-label">Outdoor Seating</label>
                </div>
                <div className="col-md-6 ob-col">
                  <input onChange={this.checkboxChange} type="checkbox" className="ob" name="Wifi" id="Wifi" value="yes" />
                  <label className="ob-label">Wifi</label>
                </div>
              </div>
              <div className="row ob-row">
                <div className="col-md-6 ob-col">
                  <input onChange={this.checkboxChange} type="checkbox" className="ob" name="TV" id="TV" value="yes" />
                  <label className="ob-label">TV</label>
                </div>
              </div>

              <div className="row ob-row">
                <div className="col-md-2">
                  <label>Price Range: &nbsp;&nbsp;</label>
                </div>
                <div className="col-md-4">
                  <input type="text" className="pr-txt" name="PriceRangeLow" id="PriceRangeLow" value="1"/>
                  &nbsp;&nbsp; to &nbsp;&nbsp;
                  <input type="text" className="pr-txt" name="PriceRangeHigh" id="PriceRangeHigh" value="20"/>
                </div>
              </div>
              <div className="row ob-row">
                <div className="col-md-2">
                  <label>Attire: &nbsp;&nbsp;</label>
               </div>
               <div className="col-md-4">
                  <select id="RestaurantAttire">
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Any">Any</option>
                  </select>
               </div>
              </div>
            <div>
            <div className="box-footer"></div>
          </div>
        </div>
      </div>
      </div>
      <div className="col-md-12">
        <div className="row stepThree">
          <div className="col-md-12 stepThreeBtn">
            <button className="btn btn-success btn-flat next-btn" type="submit"> Next Step </button>
        </div>
      </div>
     </div>
  </form>
    )
  }
}

export default MoreInfo;
