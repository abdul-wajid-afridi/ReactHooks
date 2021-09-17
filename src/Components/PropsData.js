import React, { useState } from 'react';

function PropsData(props) {
  const [name,setname]=  useState("update your name here")
  const ChangeNameHandler=(event)=>{
     return setname(event.target.value)
  }
    return (
        <div>
            <h1>{name}</h1>
            <input onChange={ChangeNameHandler}/>
        </div>
    );
}

export default PropsData;