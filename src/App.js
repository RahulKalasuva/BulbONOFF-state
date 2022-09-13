import React, { Component } from 'react'
import ON from "./On.jpg";
import OFF from "./Off.jpg";

export default class App extends Component {
  constructor(props){
    super(props)

    this.state ={ arr :[
      {
      button : false
      },
      {
        button : false
      },
      {
        button : false
      },
      {
        button : false
      },
      {
        button : true
      }]};
  }
  update = (index) => {
    let temp = this.state.arr
    temp[index].button = !temp[index].button
    this.setState({arr:temp})
  }
  render() {  
  
    return (
      <div>
      { this.state.arr.map((ele,index)=>{
       return (<><img src = {this.state.arr[index].button?OFF:ON} /> <button onClick={()=>this.update(index)}>{ele.button?"OFF":"On"}</button><br/></>); 
      })}
      </div>
     
      
    )
  }
}

