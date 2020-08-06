import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "../css/App.css";

class TransitionComp extends Component {
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
        <Transition in={this.state.show} timeout={1000}

           enter={false}
           exit={false}
           
           onEnter={ ()=> {
               console.log('ENTER')
           }}

           onExit={ ()=> {
            console.log('EXIT')
        }}
        >
          {(state) => (
            <div className={`square square-${state}`}>
              {`square square-${state}`}
            </div>
          )}
        </Transition>

        <div className="showDiv" onClick={this.showDiv}>
          show/hide
        </div>
      </>
    );
  }
}

export default TransitionComp;
