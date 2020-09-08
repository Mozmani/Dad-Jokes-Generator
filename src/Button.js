import React, { Component } from 'react';

class Button extends Component {
  state = {  }
  render() { 
    return (
      <form>
        <button
          id='button'
          type='button'
          onClick={() => this.props.click()}
          >
            Find a Dad joke!
          </button>
      </form>
      );
  }
}
 
export default Button;