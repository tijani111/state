
import './App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      Person :{ fullName:'Mohamed tijani Zouari',bio:"It won’t always be easy, but always try to do what’s right" , imgSrc:'./Mohamed Zouari.jpeg', profession:"Student"},
      show:true,
      intervalIdi:0,
      count:1,
    }; 
  
  };
  timer() {
    this.state.count && this.setState({count:this.state.count+1})} 
    componentDidMount() {
      var intervalId = setInterval(this.timer, 1000);
  
      this.setState({intervalIdi: intervalId});
   };
   
   componentWillUnmount() {
    
      clearInterval(this.state.intervalIdi);
   };
   




 funct = () => {
    this.setState({ show: !this.state.show });
 
  };
  

  render(){
    return (
      <div className="App">
 <button onClick={this.funct}  
     > {this.state.show ? 'Hide' : 'Show'}</button>

     <div>  {this.state.show && <div>
    <h1>{this.state.Person.fullName}</h1>
    <p> {this.state.Person.bio}</p>
    <span className="bg-secondary p-1 px-4 rounded text-white" >{this.state.Person.profession}</span>
    <img src={this.state.Person.imgSrc}alt="ima"/> 
    
     
    </div>
 }</div>
   <div>{this.state.intervalIdi}</div>
      </div>
    );


  }
  }


export default App;
