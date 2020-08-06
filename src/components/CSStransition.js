import React, { Component } from "react";

import "../css/App.css";

class Fade extends Component {
  state = {
    show: false,
  };

  showDiv = () => {
    this.setState({
      show: !this.state.show ? true : false,
    });
  };

  render() {
    return (
      <>
        <div className="showDiv" onClick={this.showDiv}>
          show/hide
        </div>
      </>
    );
  }
}

export default Fade;
