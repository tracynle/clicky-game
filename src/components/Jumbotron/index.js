import React from 'react';
import "./jumbotron.css";

const Jumbotron = (props) => (
    <div className="jumbotron jumbotron-fluid" id="jumbotron-bg">
        <div className="container-jumbotron text-center">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead display-5">{props.subLine}</p>
        </div>
    </div>
)


export default Jumbotron;