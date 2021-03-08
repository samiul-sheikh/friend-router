import React from 'react';

const Friend = (props) => {
    // console.log(props.friend);
    const { name, email } = props.friend;

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
        </div>
    );
};

export default Friend;