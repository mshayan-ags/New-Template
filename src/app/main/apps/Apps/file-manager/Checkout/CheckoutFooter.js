import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "auto",
    width: "85%",
    marginBottom: '10px',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },

  all: {
    display: "flex",

    justifyContent: "space-between",

    marginTop: "20px",
  },
  
  button: {
    background: "linear-gradient(to right, #4c01e0 0%, #8b2be2 100%)",
    padding: "9px 0px !important",
    color: "white",
    fontSize: "12px !important",
    width:'100%',
    margin: "0px",
    height: "45px",
    marginTop: "10px",
  },

  typo1:{
    color: '#6C738A',
    fontSize: '12px',
  },

  typo2 : {
    color: '#1A1A1A',
    fontSize: '12px',

  },

  typo3:{
    fontSize: '29px',
    fontWeight: 'bold',
  }
}));

const CheckoutFooter = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.all}>
        <Typography className = {classes.typo1}>International Standard Delivery</Typography>
        <Typography className = {classes.typo2}>$6.99</Typography>
      </Box>
      <Box className={classes.all}>
        <Typography className = {classes.typo1}>Subtotal</Typography>
        <Typography className = {classes.typo2}>$150.00</Typography>
      </Box>
      <Box className={classes.all}>
        <Typography className = {classes.typo1}>Total</Typography>
        <Typography className = {classes.typo3}>$156.99</Typography>
      </Box>
      <Box className={classes.all}>
      <Link style ={{
          textDecoration : 'none'
      }} to = "/">
      <Button className={classes.button} variant="outlined">
        Cancel
      </Button>
      </Link> 
       <Link style ={{
          textDecoration : 'none'
      }} to = "/">
      <Button className={classes.button} variant="outlined">
        Print
      </Button>
      </Link>
      </Box>
    </div>
  );
};

export default CheckoutFooter;
