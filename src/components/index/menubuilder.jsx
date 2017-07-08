import React from 'react'

class MenuBuilder extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      val: 0,
      menuName: '',
      itemName: '',
      itemPrice: '',
      menus: [],
    }
  }

  handleChange = (e) => {
    var key = e.target.name
    var val = e.target.value
    var obj  = {}
    obj[key] = val
    this.setState(obj)
  }

  menuCreate = (e) => {
    e.preventDefault()
    var menus = this.state.menus
    var menu = this.state.menuName
    var x = true
    if (menus.length > 0){
      menus.forEach(function(item, index, array) {
        if (item.name == menu){
          x = false
        }
      });
      if (x == true){
        this.state.menus.push({name: menu, items: []})
        this.setState({menus: this.state.menus})
      }else{
        alert("Menu exists: "+menu)
      }
    }else{
      const m = {name: menu, items: []}
      this.state.menus.push(m)
      this.setState({menus: this.state.menus})
    }

  }

  menuDelete = (e) => {
    var menu = e.target.name
    var t = this
    this.state.menus.forEach(function(m, i, array) {
      if (m.name == menu){
        t.state.menus.splice(i, 1);
        t.setState({menus: t.state.menus});
      }
    })
  }

  itemCreate = (e) => {
    e.preventDefault()
    var menu = e.target.name
    var menus = this.state.menus
    var name = this.state.itemName
    var price = this.state.itemPrice
    var t = this
    menus.forEach(function(m, index, array) {
      if (m.name == menu){
        const item = {name: name, price: price}
        t.state.menus[index].items.push(item)
        t.setState({menus: t.state.menus})
      }
    });
  }

  itemDelete = (e) => {
    var menu = e.target.id
    var item = e.target.name
    var t = this
    this.state.menus.forEach(function(m, i, array) {
      if (m.name == menu){
        t.state.menus[i].items.forEach(function(x, y, a) {
          if (x.name == item){
            t.state.menus[i].items.splice(y, 1);
            t.setState({menus: t.state.menus});
          }
        })
      }
    })
  }

  render(){
    var menus = [];
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="box box-primary">
            <div className="box-header">
              <div className="box-title">Add Your Menus</div>
            </div>
            <div className="box-body result-inner" style={{minHeight: this.props.height}}>
              <form onSubmit={this.menuCreate}>
                <div className="row">
                  <div className="col-md-12">
                    <label>Create a Menu:</label><br />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="menu-create"
                      name="menuName"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-block btn-success" type="submit">Create</button>
                  </div>
                </div>
              </form>
              <br />
              <br />
              <div className="row">
                {this.state.menus.length > 0 &&
                  this.state.menus.map((m => (
                    <div className="col-md-6">
                      <div className="box box-success">
                        <div className="box-header">
                          <div className="box-title">{m.name}</div>
                          <div className="btn-group box-tools">
                            <button className="btn btn-danger btn-block btn-xs" name={m.name} onClick={this.menuDelete}><i className="fa fa-window-close" aria-hidden="true"></i></button>
                          </div>
                        </div>
                        <div className="box-body">
                          <div className="row">
                            <form onSubmit={this.itemCreate} name={m.name}>
                              <div className="col-md-1">
                              Name:
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="text"
                                  className="item-create"
                                  onChange={this.handleChange}
                                  name="itemName"
                                />
                              </div>
                              <div className="col-md-1">
                              Price:
                              </div>
                              <div className="col-md-2">
                                <input
                                  type="text"
                                  className="item-create"
                                  name="itemPrice"
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="col-md-3">
                                <button className="btn btn-block btn-success" type="submit">Add Item</button>
                              </div>
                            </form>
                          </div>
                          <hr />
                          <br />
                          <table className="table table-striped">
                            <tbody>
                              {m.items.map((i => (
                                <tr>
                                  <td>{i.name}</td>
                                  <td>{i.price}</td>
                                  <td>
                                    <div className="btn-group item-tools">
                                      <button className="btn btn-warning btn-flat btn-sm" name={i.name} id={m.name}><i className="fa fa-arrows" aria-hidden="true"></i></button>
                                      <button className="btn btn-danger btn-flat btn-sm" name={i.name} id={m.name} onClick={this.itemDelete}><i className="fa fa-window-close" aria-hidden="true"></i></button>
                                    </div>
                                  </td>
                                </tr>
                              ))
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="box-footer"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuBuilder;
