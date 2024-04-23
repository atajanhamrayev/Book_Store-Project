import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";

class CategoriesContainer extends Component {
  render() {
    return <Categories {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  categories: state.homePage.categories,
});

export default connect(mapStateToProps)(CategoriesContainer);
