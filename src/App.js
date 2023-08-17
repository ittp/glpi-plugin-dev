import "./styles.css";
import React, { Component } from "react";
import { createPortal } from "react-dom";

export default function App() {
  return (
    <IFrame>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </IFrame>
  );
}

export class IFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountNode: null
    };
    this.setContentRef = (contentRef) => {
      this.setState({ mountNode: contentRef?.contentWindow?.document?.body });
    };
  }

  render() {
    const { children, ...props } = this.props;
    const { mountNode } = this.state;
    return (
      <iframe {...props} ref={this.setContentRef}>
        {mountNode && createPortal(children, mountNode)}
      </iframe>
    );
  }
}
