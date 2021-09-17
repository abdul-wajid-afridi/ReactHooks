import React from 'react';
import "../App.css"
function UserOutput(props) {
    return (
        <div className="UserOutPut">
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>my be write some inpute tags</p>
        </div>
    );
}

export default UserOutput;