import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";
import { Redirect } from 'react-router-dom'

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { connect } from 'react-redux';
import { getadmin,getitems,dashboard,getcount} from '../../actions/itemaction';
const useStyles = makeStyles(styles);
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class Dashboard extends React.Component {
  state = {
    count:[],
    loading:false,
}
componentDidMount(){
  console.log(this.props.item);
  this.setState({ loading:true});
  this.props.getcount();
  setTimeout(()=>{
      
      this.setState({ count:this.props.item.count});
      console.log(this.state.count);
      console.log( JSON.parse(localStorage.getItem('user')));
      this.setState({ loading:false});
    },1000);
}
  render(){
    const c = this.state.count;
    const u = JSON.parse(localStorage.getItem('user'));
    const p = JSON.parse(localStorage.getItem('picture'));
    console.log(u);
    console.log(p);
    if(u.isLoggedin==false){
      return  <Redirect to="/" />
    }
    else{
    return (
      <div>
        <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={100}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>supervised_user_circle</Icon>
                </CardIcon>
                <p  style={{ color: 'black' }}>Total Registered Users</p>
                <h3 style={{ color: 'black'}}>
                { c.usercount}
                </h3>
              </CardHeader>
              <hr/>
              <CardFooter stats>
              <div style={{ color: 'black' }}>
                  <Update style={{ color: 'black'}} />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>scanner</Icon>
                </CardIcon>
                <p style={{ color: 'black'}}>Total Machines</p>
                <h3 style={{ color: 'black'}}>
                { c.machinecount}
                </h3>
              </CardHeader>
              <CardFooter stats>
              <div style={{ color: 'black'}}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>pending</Icon>
                </CardIcon>
                <p style={{ color: 'black'}}>Available Machines</p>
                <h3 style={{ color: 'black'}} >{ c.availmachines}</h3>
              </CardHeader>
              <CardFooter stats>
              <div style={{ color: 'black'}}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                <Icon>info_outline</Icon>
                </CardIcon>
                <p style={{ color: 'black'}}>Active Users</p>
                <h3 style={{ color: 'black'}}>{ c.activeuser}</h3>
              </CardHeader>
              <CardFooter stats>
                <div style={{ color: 'black'}}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
    }
  }
 
}
const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getadmin,getitems,dashboard,getcount})(Dashboard);