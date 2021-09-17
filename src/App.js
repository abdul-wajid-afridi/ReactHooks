import './App.css';
import React, { Component, useState } from 'react'
import UserInpute from './UserInpute/UserInpute';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {
   state={
     persons:[
       {id: "1",name:"ali khan", age:12},
       {id: "2",name:"ahmad khan", age:33},
       {id: "3",name:"Mubeen khan",age:35},
     ]
   }
DeleteHandler=(delindex)=>{
  const persons=this.state.persons
  persons.splice(delindex,1)
  this.setState({persons:persons})
}
ChangeNameHandler=(index)=>{
  return(
    this.setState({
      persons:[
        {name:"Name Changed", age:12},
        {name:"ahmad khan", age:33},
        {name:"name changed 2",age:123},
      ]
    })
  )
}
ChangeHandler=(event)=>{
  this.setState({
    persons:[
      {name:event.target.value, age:12},
      {name:"ahmad khan", age:33},
      {name:"name changed 2",age:123},

    ]
  })
}
  render(){
    return(
      <div>
      {this.state.persons.map((person,index)=>{ 
      return(
        <div>
      
        <p onClick={()=>this.DeleteHandler(index)}>{person.name }{person.age}</p>
        <button onClick={()=>this.ChangeNameHandler(index)}>Change</button>
        <input onChange={this.ChangeHandler}/>
        
        </div>)
      })}
      </div>
    )
}
}
export default App;