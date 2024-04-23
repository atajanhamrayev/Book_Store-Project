import React, { Component } from "react";
import { connect } from "react-redux";
import NewBooks from "./NewBooks";

class NewBooksContainer extends Component {
  render() {
    return <NewBooks {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  books: state.homePage.newBooks,
});

export default connect(mapStateToProps)(NewBooksContainer);
