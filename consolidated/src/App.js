import React, { Component } from 'react'
import './App.css';

class App extends Component {
  state = {
    server_id : "",
    server_name : ""
  }

  getSubmit = () => {
    fetch('http://localhost:3001/', {
      method : 'get',
      headers : {
        'content-type' : 'application/json',
      },
    })
    .then(res => {
      console.log(res);
      console.log(typeof(res));
      return res.json();
    })
    .then(res => {
      this.setState({
        server_id : res.serverid,
        server_name : res.servername
      });
    });
  }

  sendSubmit = () => {
    const serverData = {
      server_id : "send server_id",
      server_name : "send sever_name"
    };
    fetch("http://localhost:3001/Sendserver", {
      method : "post",
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(serverData)
    });
  };

  render() {
    return (
      <div>
        <button onClick = {this.sendSubmit}>sendSubmit</button>
        <button onClick = {this.getSubmit}>getSubmit</button>
        <h1>{this.state.server_id}</h1>
        <h1>{this.state.server_name}</h1>
      </div>
    )
  }
}

export default App;