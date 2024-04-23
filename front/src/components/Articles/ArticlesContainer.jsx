import React, { Component } from "react";
import { connect } from "react-redux";
import Articles from "./Articles";

class ArticlesContainer extends Component {
  render() {
    return <Articles {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  articles: state.homePage.articles,
});

export default connect(mapStateToProps)(ArticlesContainer);
