import React, { Component } from 'react';

class Page extends Component {
  state = {  }
  render() { 
    return (
      <div className='grp'>
        {this.props.state}
      </div>
      );
  }
}
 
export default Page;