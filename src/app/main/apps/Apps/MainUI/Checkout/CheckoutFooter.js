import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom'
import MyPurchasesModal from "../MyPurchaseModel";

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
    margin:"10px"
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

const CheckoutFooter = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.main}>
      <Box className={classes.all}>
        <Typography className = {classes.typo1}>International Standard Delivery</Typography>
        <Typography className = {classes.typo2}>$6.99</Typography>
      </Box>
      <Box className={classes.all}>
        <Typography className = {classes.typo1}>Subtotal</Typography>
        <Typography className = {classes.typo2}>${props.totalprice}</Typography>
      </Box>
      <Box className={classes.all}>
        <Typography className = {classes.typo1}>Total</Typography>
        <Typography className = {classes.typo3}>${props.totalprice}</Typography>
      </Box>
      <Box className={classes.all}>
     
      <Button className={classes.button} variant="outlined">
        Cancel
      </Button>
     
    
      <Button
        onClick={handleOpen}
        className={classes.button}
        variant="outlined"
      >
        Pay
      </Button>

      <MyPurchasesModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      </Box>
    </div>
  );
};

export default CheckoutFooter;
