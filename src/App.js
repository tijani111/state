
import './App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      Person :{ fullName:'Mohamed tijani Zouari',bio:"It won’t always be easy, but always try to do what’s right" , imgSrc:'./Mohamed Zouari.jpeg', profession:"Student"},
      show:true,
  
      time:0,
    }; 
  
  };
 
    componentDidMount() {
      this.timer = setInterval(() => this.setState({
        time: this.state.time + 1
      }), 1000)
  
    
   };
   
   componentWillUnmount() {
    
      clearInterval( this.timer);
   };
   




 funct = () => {
    this.setState({ show: !this.state.show });
 
  };
  

  render(){
    return (
      <div className="App">
 <button onClick={ this.funct } 
     > {this.state.show ? 'Hide' : 'Show'}</button>

     <div>  {this.state.show && <div>
    <h1>{this.state.Person.fullName}</h1>
    <p> {this.state.Person.bio}</p>
    <span className="bg-secondary p-1 px-4 rounded text-white" >{this.state.Person.profession}</span>
    <img src={this.state.Person.imgSrc}alt="ima"/> 
    
     
    </div>
 }</div>
   <div>{this.state.time}</div>
      </div>
    );


  }
  }


export default App;
