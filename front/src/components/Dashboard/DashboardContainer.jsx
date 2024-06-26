import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";


class DashboardContainer extends Component {
  render() {
    return <Dashboard {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  books: state.homePage.dashboard,
});

export default connect(mapStateToProps)(DashboardContainer);
