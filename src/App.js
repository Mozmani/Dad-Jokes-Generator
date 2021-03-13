import React from 'react';
import Header from './Header'
import Page from './Page'
import './App.css'

class App extends React.Component {
  state = {
    joke: 'Where does a Dentist go on vacation? Floss Vegas!'
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
      
      <Page
        state={this.state.joke}
        handleClick={this.handleClick}
      />
      </main>
      </>
     );
  }
}
 
export default App;
