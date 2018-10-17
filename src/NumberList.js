import React from 'react';

const NumberList = (props) => {
    const numberit = props.numbers;
    const listItems = numberit.map((number) => 
        <li key={number.toString()}>{number}</li>
    );
    return(
        <ul>{listItems}</ul>
    );
}

export default  NumberList;