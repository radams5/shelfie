import React from 'react'

export default function Product(props){
  return(
    <div>
      <div>Name: {props.item.name}</div>
      <div>Price: {props.item.price}</div>
      <figure>
        <img src={props.item.url} ></img>
      </figure>
    </div>
  )
}