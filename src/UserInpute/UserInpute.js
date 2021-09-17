import React from 'react';
import "../App.css"
function UserInpute(props) {
    return (
        <div>
            <input className="UserInput" type="text" onChange={props.onChange}
            value={props.name}/>
        </div>
    );
}

export default UserInpute;