import { Box, Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { Component, createRef } from "react";

// import safeWay from "../../assets/imgs/safe-way.png";
import NavigationIcon from "@material-ui/icons/Navigation";
import StarRateIcon from "@material-ui/icons/StarRate";
// import { ReactComponent as Trash } from "../../assets/imgs/trash.svg"
// import Trash from "../../assets/imgs/trash.svg";
import CheckoutCards from "./CheckoutCards";
import CheckoutFooter from "./CheckoutFooter";



function Checkout() {
  

  return (
    <div>
      {[1 ].map((el) => (
          <CheckoutCards />
      ))}

      <CheckoutFooter/>
        
    </div>
  );
}

export default Checkout;
