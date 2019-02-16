import React, { Component } from 'react';
import '../../App.css';
import Product from '../Product/Product'
import Axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  deleteProduct(id){
    Axios.delete(`/api/product/${id}`).then( res => {
      this.setState({
        
      })
    })
  }

 
  render() {
    return (
      <div className="Dashboard">
      Dashboard
      {this.props.inventory.map((item) => {
        return <div><Product item={item}/></div>
      })}
     
      </div>
    );
  }
}

export default Dashboard;