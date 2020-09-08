import React from 'react';
import Header from './Header'
import Page from './Page'
import Button from './Button'
import './App.css'

class App extends React.Component {
  state = {
    joke: ''
    }
  
  handleClick =  () => {
    let url = `https://icanhazdadjoke.com/`

    fetch(url, {
      method: 'GET',
      headers: {"User-Agent": "Mark-The-Dev" ,
        "Accept": "application/json"}

    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        joke: data.joke
      })
    })
  }

  
  
  render() { 
    
    return ( 
      <>
      <Header />
      <main>
      <Button
        click={this.handleClick}
        state={this.state.joke}
      />
      <Page
        state={this.state.joke}
      />
      </main>
      </>
     );
  }
}
 
export default App;
