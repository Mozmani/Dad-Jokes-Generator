import React, { Component } from 'react';

class Page extends Component {
  state = {  }
  render() { 
    return (
      <>
      <div className='welcome'>
        <p>
          Welcome to Dad-a-base, a fun site dedicated to those with a refined humor palate.
          If you ever need an ice-breaker, a fun conversation starter or simply a laugh feel free to generate one of over 600 jokes below.
        </p>
      </div>
      <div className='grp'>
      <button onClick={this.props.handleClick}>Find a joke!</button>
      
        
        {this.props.state}
      </div>
      </>
      );
  }
}
 
export default Page;