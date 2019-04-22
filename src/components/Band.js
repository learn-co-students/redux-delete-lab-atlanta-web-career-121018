// import React, { Component } from 'react';
import React from 'react';

const Band = (props) => {

    console.log(props);
    return (
        <div>
            <li>{props.band.text}</li><button onClick={() => {props.deleteBand(props.band.id)}}>DELETE BAND</button>
        </div>
    );
};

export default Band;
