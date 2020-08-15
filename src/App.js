import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Types from './Component/Types';
import Footer from './Component/Footer';


class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <br/>
        <About/>
        <Types/>
        <Footer/>
        
      </div>
    )

  }
}
export default App;
