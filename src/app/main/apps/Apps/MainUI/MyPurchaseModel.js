import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ShareIcon from "@material-ui/icons/Share";
import { Box, Divider, List, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  box:{
    margin:"auto",
    marginTop:"5%",
    marginBottom:"15%",
    
  },
  image:{
    margin:"auto",
    marginLeft:"30%",
    marginTop:"5%",
    ...theme.typography.button,
    letterSpacing:"0 !important",
    fontSize:"1em !important",
    textTransform:"none !important",
    fontWeight:"1000 !important"

  },
   
  root: {
    ...theme.typography.button,
    letterSpacing:"0 !important",
    fontSize:"1em !important",
    textTransform:"none !important",
    fontWeight:"1000 !important"
    
    
    }, 
     blue: {
      ...theme.typography.button,
      letterSpacing:"0 !important",
      fontSize:"1em !important",
      textTransform:"none !important",
      fontWeight:"1000 !important",
      color:"Blue"
      
      },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  },
  headerBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
  },
  mainBox: {
    position: "relative",
    width: "600px",
    margin: "40px auto",

  },
  paper: {
    color: "#4D4D4D",
    fontSize: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "85%",
    margin: "auto",
    borderRadius: "11%",

    // border: "2px solid #000",`
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    backgroundColor: "#f3f3f3",
    height: "auto,",
    overflow: "hidden",
    padding: "20px",
    background: "#fff",
    // boxShadow: "0 3px 5px rgba(0, 0, 0, 0.05)",
    // "-webkit-clip-path":
    //   "polygon(2% 0%, 5% 2%, 6% 0%, 8% 2%, 10% 0%, 12% 2%, 14% 0%, 16% 2%, 18% 0%, 20% 2%, 22% 0%, 24% 2%, 26% 0%, 27% 2%, 28% 0%, 30% 2%, 32% 0%, 34% 2%, 36% 0%, 38% 2%, 40% 0%, 42% 2%, 44% 0%, 46% 2%, 48% 0%, 50% 2%, 52% 0%, 54% 2%, 56% 0%, 58% 2%, 60% 0%,  62% 2%, 64% 0%, 66% 2%, 68% 0%, 70% 2%, 72% 0%, 74% 2%, 76% 0%, 78% 2%, 80% 0%, 82% 2%, 84% 0%, 86% 2%, 88% 0%, 90% 2%, 92% 0%, 94% 2%, 96% 0%, 98% 2%,  100% 0%, 100% 5%, 100% 10%, 100% 15%, 100% 20%, 100% 25%, 100% 30%, 100% 35%, 100% 40%, 100% 45%, 100% 50%, 100% 55%, 100% 60%, 100% 65%, 100% 70%, 100% 75%, 100% 80%, 100% 85%, 100% 90%, 100% 95%, 100% 100%, 98% 98%, 96% 100%, 94% 98%, 92% 100%, 90% 98%, 88% 100%, 86% 98%, 84% 100%, 82% 98%, 80% 100%, 78% 98%, 76% 100%, 74% 98%, 72% 100%, 70% 98%, 68% 100%, 66% 98%, 64% 100%, 62% 98%, 60% 100%, 58% 98%, 56% 100%, 54% 98%, 52% 100%, 50% 98%, 48% 100%, 46% 98%, 44% 100%, 42% 98%, 40% 100%, 38% 98%, 36% 100%, 34% 98%, 32% 100%, 30% 98%, 28% 100%, 26% 98%, 24% 100%, 22% 98%, 20% 100%, 18% 98%, 16% 100%, 14% 98%, 12% 100%, 10% 98%, 8% 100%, 6% 98%, 4% 100%, 2% 98%,  0% 100%, 2% 100%, 0% 100%, 2% 100%, 0% 100%, 2% 100%, 0% 100%, 2% 100%, 0% 100%, 2% 100%, 0% 100%, 2% 100%, 0% 100%, 2% 100%, 0% 100%, 2% 100%, 0% 100%, 2% 5%)",
  },

  divider: {
    borderBottomStyle: "dotted",
    margin: "auto",
    width: "100%",
  },

  listItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "3px",
  },

  dot :{
    display:"flex",
    justifyContent:"center",
    width:"70%",
    fontSize:"22px",
    [theme.breakpoints.up('sm')]: {
      fontSize:'28px',
    },
  margin:"auto"

  },

}));

export default function MyPurchasesModal({ handleClose, handleOpen, open }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.mainBox}>
            <div className={classes.paper}>
              <div className={classes.headerBox}>
             
                <Box className = {classes.dot}
                >
                  <span>Recipt</span>
               
                </Box>

              
              </div>
              <div
                style={{
                  display: "flex",
                  width: "94%",
                  justifyContent: "space-between",
                }}
              >
                <p>
                  Date:- <span>21-10-2020</span>
                </p>
                <p>
                  Invoice ID:- <span>12345</span>
                </p>
              </div>

              <Divider className={classes.divider} />

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  margin: "20px 0px 34px 0px",
                }}
              >
                <div>
                  <p>
                  Make My Trip <br />
                    Domestic Flight<br />
                    Make My Trip <br />
                    Domestic Flight
                  </p>
                </div>

                <p>
                  AED<span>800</span>
                </p>
              </div>

              <Divider className={classes.divider} />

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  margin: "20px 0px",
                }}
              >
                <Box className={classes.listItem}>
                  <div>Total :</div>
                  <div>AED 325.30</div>
                </Box>
                <Box className={classes.listItem}>
                  <div>Delivery Charge</div>
                  <div>AED 0</div>
                </Box>
                <Box className={classes.listItem}>
                  <div>Discount</div>
                  <div>AED 0</div>
                </Box>
                <Box className={classes.listItem}>
                  <div>VAT 5%</div>
                  <div>AED 5</div>
                </Box>
                {/* <List>
                  <ListItem>Total :</ListItem>
                  <ListItem>Delivery Charge :</ListItem>
                  <ListItem>Discount :</ListItem>
                  <ListItem>VAT 5% :</ListItem>
                </List>
                <List>
                  <ListItem>
                    AED <span>800</span>
                  </ListItem>
                  <ListItem>
                    AED <span>800</span>
                  </ListItem>
                  <ListItem>
                    AED <span>800</span>
                  </ListItem>
                  <ListItem>
                    AED <span>800</span>
                  </ListItem>
                </List> */}
              </div>

              <Box className={classes.box}>
              <div className={classes.root}>{"To Checkout From Store Need to Verify "}<span className={classes.blue}> QR CODE </span>{" First"}</div>
              </Box>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
