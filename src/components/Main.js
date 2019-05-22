import React, { Component } from "react";

class Main extends Component {
  urlquery = React.createRef();
  state = {};
  httpGetAsync = (theUrl, callback) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
  };

  processPage = responseText => {
    this.setState({ htmlcontent: responseText });
  };

  handleSubmit = event => {
    event.preventDefault();
    const url = this.urlquery.current.value;
    this.httpGetAsync(url, this.processPage);
  };
  render() {
    return (
      <div>
        <p>1) Copie o endereço da página que quer ler.</p>
        <input
          type="text"
          id=""
          ref={this.urlquery}
          placeholder="2) Cole o endereço aqui."
        />
        <button type="submit" onClick={this.handleSubmit}>
          Desbloquear
        </button>
      </div>
    );
  }
}

export default Main;
