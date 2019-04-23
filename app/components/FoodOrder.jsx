import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const FoodOrderProjectDiv= styled.div
`

`

const FoodOrderHeader = styled.h1
`
  text-align: left;
  font-size: 2vw;
  padding-left: 20px;
`

const FoodOrderBody = styled.div
`
  text-align: left;
  padding-left: 20px;
  padding-bottom: 20px;
  font-size: 1vw;

`
const FoodOrderDiv = styled.div
`

`

class FoodOrder extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
    <FoodOrderProjectDiv>
      <FoodOrderHeader>
        Food Order
      </FoodOrderHeader>
      <FoodOrderBody>
        <p> Send your friends an order to make you food. Include special instructions for them. You can email them out of the blue as a prank, or make special arrangements, either way this is a great tool for sending random emails to your friends to think they are being spammed! </p>
        <br/>
        <p>Find out more on <a target="_blank" href="https://github.com/codemasa/FoodSelectionWebApp">GitHub</a> or <a target="_blank" href="https://food-order-web-app.herokuapp.com">Demo</a></p>

      </FoodOrderBody>
    </FoodOrderProjectDiv>
    )
  }
}

export default FoodOrder;
