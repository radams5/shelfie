import React, { Component } from 'react';
import '../../App.css';
import Axios from 'axios';
import getAllInventory from '../../App'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      url: '',
      name: '',
      price: 0
    }

  }
  handleURL(val){
    this.setState({
      url: val
    })
  }
  handleName(val){
    this.setState({
      name: val
    })
  }
  
  handlePrice(val){
    this.setState({
      price: val
    })
  }
  handleCancel(){
    this.setState({
      url: '',
      name: '',
      price: 0
    })   
  }

  createProduct(){
    const {name, price, url} = this.state
    console.log(name, price, url)
    if (name){await Axios.post('/api/product', {name, price, url}).then( (res) => {
      this.setState({
        url: '',
        name: '',
        price: 0
      })
    })}
    else{alert('need a name')}
    this.props.getAllInventory()
    console.log(this.state)
  }




render() {
  return (
    <div className="Form" >

      <input 
        placeholder='Image URL' 
        onChange={e => this.handleURL(e.target.value)} 
        value={this.state.url}
         />
      <input 
        placeholder='Product Name'
        onChange={e => this.handleName(e.target.value)}
        value={this.state.name}/>
      <input 
        placeholder='Price'
        onChange={e => this.handlePrice(e.target.value)}
        value={this.state.price}/>
      <button 
        onClick={e => this.handleCancel()}>
        Cancel
      </button>
      <button 
        onClick={e => this.createProduct(e.target.value)}
        >Add to Inventory
      </button>

      </div>
    );
  }
}

export default Form;