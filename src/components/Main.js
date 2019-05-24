import React, { Component } from "react";
import PropTypes from "prop-types";

class Main extends Component {
  static propTypes = {
    updateHtmlContent: PropTypes.func
  };
  urlquery = React.createRef();
  httpGetAsync = (theUrl, callback) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
  };

  handleSubmit = event => {
    event.preventDefault();
    const url = this.urlquery.current.value;
    if (!url) {
      alert("Insira uma página!");
      return;
    }
    this.props.updateState();
    this.httpGetAsync(url, this.props.updateHtmlContent);
  };
  render() {
    return (
      <div className="intro">
        <p className="passo1">
          <span className="passo1-texto">
            Primeiro, copie o endereço da página que você deseja ler.
          </span>
        </p>
        <div className="inputwrapper">
          <input
            className="inputonly"
            type="text"
            id=""
            ref={this.urlquery}
            placeholder="Agora cole o endereço aqui."
          />
        </div>

        <div>
          <button type="submit" className="unblock" onClick={this.handleSubmit}>
            {this.props.buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
