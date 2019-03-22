import React, { Component } from 'react';

class App extends Component {
    constructor(){
      super();

      this.state = {
        inputText: '',
        message:''
      }

      this.setMessage = this.setMessage.bind(this);
      this.sayHello = this.sayHello.bind(this);
    }

    setMessage(e) {
      this.setState({[e.target.name]: e.target.value});
    }

    sayHello(){
      let finalMessage = 'Type somenthing'
      if(this.state.inputText) finalMessage = 'Hello  ' + this.state.inputText;

      this.setState({message: finalMessage});

      setTimeout(() => {
        this.setState({message: ''});
      }, 5000)

    }

    render() {
        return (
          <div>
            <input type="text" name="inputText" className="inputStyle" value={this.state.inputText} onChange={this.setMessage}  />
            <button onClick={this.sayHello} className="btn" >Click here</button>
            <br />
            <h1 className="message">{this.state.message}</h1>
          </div>
        )
    }
}

export default App;
