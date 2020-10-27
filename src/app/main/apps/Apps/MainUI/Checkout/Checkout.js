import { Box, Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { Component, createRef } from "react";
import  { useState } from "react";

// import safeWay from "../../assets/imgs/safe-way.png";
import NavigationIcon from "@material-ui/icons/Navigation";
import StarRateIcon from "@material-ui/icons/StarRate";
// import { ReactComponent as Trash } from "../../assets/imgs/trash.svg"
// import Trash from "../../assets/imgs/trash.svg";
import CheckoutCards from "./CheckoutCards";
import CheckoutFooter from "./CheckoutFooter";



function Checkout(props) {
  const [count, setCount] = useState(1);
  const Btn =  <div size="small" aria-label="small outlined button group">
  <span style={{padding:8,fontSize:12}} onClick={() => setCount(count - 1)}>-</span>
 <span style={{padding:8,fontSize:12}} disabled>{count}</span>
 
 <span style={{padding:8,fontSize:12}} onClick={() => setCount(count + 1)}>+</span>
 </div>
 const total = props.price * count
  return (
    <div>
         <CheckoutCards image={props.image} name={props.name} price={props.price} totalprice={total} checkout={Btn}/>
    
      <CheckoutFooter totalprice={total}/>
        
    </div>
  );
}

export default Checkout;
