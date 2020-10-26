import { Box, Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { Component, createRef } from "react";
import Icon from '@material-ui/core/Icon';

import safeWay from "../image.jpg";
import NavigationIcon from "@material-ui/icons/Navigation";
import StarRateIcon from "@material-ui/icons/StarRate";

// import { ReactComponent as Trash } from "../../assets/imgs/trash.svg"
// import Trash from "../../assets/imgs/trash.svg";
import Trash from '@material-ui/icons/Delete';
// import Shoes from "../../assets/imgs/waise.jpeg";
// import WithPurchase from "../PurchaseHistory/WithPurchase";

import Incdec from "./incrementdecrement";

const useStyles = makeStyles((theme) => ({
  textField: {
    backgroundColor: "white",
    width: "80%",
    marginTop: "-20px",
    "& input": {
      height: "10px",
    },
  },

  typoBox: {
    marginTop: "5px",
    marginLeft: "-1px",
  },

  locationCard: {
    padding: "5px",
    margin: "auto",
    width: "85%",
    boxShadow:
      "0px 2px 5px -1px rgba(0,0,0,0.2), 0px 1px 3px 1px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)",
  
    display: "flex",
    justifyContent: "space-between",
  },

  Typo2: {
    fontSize: "13px",
    width: "80%",
    marginTop: "5px",
    fontWeight: "bolder",
    [theme.breakpoints.up('sm')]: {
        fontSize:'15px'
      },
  },

  locationImg: {
    marginRight: 30,
    marginTop: "7px",
    objectFit: "cover",
    width:90
  },
  lastBox: {
    marginTop: "20px",
    marginRight: "2px",
  },

  Typo1: {
    fontSize: "10px",
    color: "lightslategray",
    [theme.breakpoints.up('sm')]: {
        fontSize:'12px'
      },
     
  },

  cardActionsPaper: {
    display: "flex",
    padding: "5px",
    borderRadius: "5px",
    marginTop: "-10px",
    border: "1px solid lightgrey",
    width: "50px",
    boxShadow: "unset",
    justifyContent: "space-around",
    marginLeft: "auto",
    color: "gray",
    [theme.breakpoints.up('sm')]: {
        width: "60px",
      },
  },

  lastSpan: {
    fontWeight: "bold",
    color: "#555555",
    marginRight: "8px",
    fontSize: "15px",
  },

  kuku:{
    marginTop: "15px",
  }
}));

function CheckoutCards({Withpurchase}) {
  const classes = useStyles();
  
  console.log({Withpurchase})
  return (
    <div className = {classes.kuku}>
      <Card className={classes.locationCard}>
        <Box display="flex" alignItems="flex-start">
          <Box>
            <img className={classes.locationImg}
             src={safeWay}
              />
          </Box>

          <Box display="block" className={classes.typoBox}>

          <Typography className={classes.Typo2}>
               Burger
            </Typography>
            <Typography className={classes.Typo1}>
               $50
            </Typography>
          </Box>
        </Box>
        <Box display="block" className={classes.lastBox}>
          {Withpurchase ? (<div></div>) : ( 
          <Paper className={classes.cardActionsPaper}>
            <Incdec />
          </Paper>)}
         
          <Box
            display="flex"
            style={{
              marginTop: "10px",

            }}
          >
            <span className={classes.lastSpan}>$50.00</span>

            {Withpurchase ? (<div></div>) : (<Icon>delete</Icon>)}
            
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default CheckoutCards;
