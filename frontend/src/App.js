import React from 'react';
import './App.css';

class App extends React.Component {

  
  

  componentDidMount(){
    fetch('http://localhost:3001/categories')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render(){
  return (
    <div className="App">
      <h1>Welcome to the strength shop</h1>
    
    </div>
  );
}
}

export default App;
