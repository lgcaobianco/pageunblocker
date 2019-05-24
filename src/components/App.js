import React from "react";
import Main from "./Main";
import PageContent from "./PageContent";
class App extends React.Component {
  state = {
    buttonText: "Abrir!"
  };

  updateState = () => {
    this.setState({ buttonText: "Pronto!" });
  };

  updateHtmlContent = unblockedContent => {
    this.updateState();
    const obj = document.querySelector("#main");
    const div = document.createElement("div");
    div.innerHTML = unblockedContent.trim();
    obj.appendChild(div);
  };

  render() {
    return (
      <div className="App">
        <div className="content">
          <Main
            updateHtmlContent={this.updateHtmlContent}
            updateState={this.updateState}
            buttonText={this.state.buttonText}
          />
        </div>
      </div>
    );
  }
}

export default App;
