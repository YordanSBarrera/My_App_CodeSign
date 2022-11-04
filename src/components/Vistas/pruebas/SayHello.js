import React from "react";
class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello!" };
    // Esta línea es importante!
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.state.message);
  }
  valor() {
    return this.state.message;
  }
  render() {
    // Porque `this.handleClick` está vinculada, podemos utilizarla como un manejador de evento
    return <button onClick={this.handleClick}>Say hello</button>;
  }
}

export default SayHello;
