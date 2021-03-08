import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    // console.log(props.friend);
    const { name, email, id } = props.friend;

    const friendStyle = {
        border: '1px solid goldenrod',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px'
    }
    return (
        <div style={friendStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p><Link to={`/friend/${id}`}>show details of friend {id}</Link></p>
        </div>
    );
};

export default Friend;