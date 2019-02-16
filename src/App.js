import React, { Component } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard'
import Header from './Component/Header/Header'
import Form from './Component/Form/Form'
import axios from 'axios'


class App extends Component {
constructor(){
  super()
  this.state = {
    inventory: []
  }

this.getAllInventory = this.getAllInventory.bind(this)

}

componentDidMount() {
  axios.get('/api/inventory').then(res => {
    this.setState({
      inventory: res.data
    })
  })
}
getAllInventory(){
  axios.get('/api/inventory').then(res => {
    this.setState({
      inventory: res.data
    })
  })
}

refreshstate(){
  this.setState({
    
  })
}


  render() {
    return (
      <div className="App">
      <Header/>
      <Form  getAllInventory={this.getAllInventory}/>
      <Dashboard inventory={this.state.inventory} getAllInventory={this.getAllInventory}/>
     
      </div>
    );
  }
}

export default App;
