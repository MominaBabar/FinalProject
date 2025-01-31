import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { Redirect } from 'react-router-dom'

import momina from "assets/img/momina.png";
import tehmina from "assets/img/tehmina.jpg";
import sir_sohail from "assets/img/Sir_sohail.jpg";
import mam_mariam from "assets/img/mam_mariam.jpg";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default class Team extends React.Component {
  render()
  {
  const u = JSON.parse(localStorage.getItem('user'));
    if(u.isLoggedin==false){
      return  <Redirect to="/" />
    }
    else{
  return (
    <div>

       <GridContainer>
       <GridItem xs={12} sm={12} md={2}></GridItem>       
        <GridItem xs={12} sm={12} md={8}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={sir_sohail} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 style={{ color: 'black' }}>Prof. Dr. Sohail Asghar</h6>
              <h4 style={{ color: 'black' }}>Supervisor</h4>
              <p   style={{ color: 'black' }}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}></GridItem>   
        <GridItem xs={12} sm={12} md={2}></GridItem>   
        <GridItem xs={12} sm={12} md={8} style={{marginTop:'27px'}}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={mam_mariam} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 style={{ color: 'black' }}>Dr. Mariam akbar</h6>
              <h4  style={{ color: 'black' }}>Co-supervisor</h4>
              <p  style={{ color: 'black' }}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
             
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}></GridItem> 
        <br/><br/>  
        <GridItem xs={12} sm={12} md={6} style={{marginTop:'55px'}}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={momina} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 style={{ color: 'black' }}>Momina Babar</h6>
              <h4  style={{ color: 'black' }}>Group Member</h4>
              <p  style={{ color: 'black' }}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} style={{marginTop:'55px'}}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={tehmina} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 style={{ color: 'black' }}>Tehmina Javaid</h6>
              <h4 style={{ color: 'black' }}>Group Member</h4>
              <p   style={{color: "black"}}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
             
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
    }
  }
}
