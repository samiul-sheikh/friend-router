import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {

    const { friendId } = useParams();
    const [Friend, setFriend] = useState({});

    useEffect(() => {
        const url = (`https://jsonplaceholder.typicode.com/users/${friendId}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [friendId])

    return (
        <div>
            <h3>Friend Detail: {friendId}</h3>
            <h3>Name: {Friend.name}</h3>
            <p>E-mail: {Friend.email}</p>
            <p>Phone: {Friend.phone}</p>
            <p>website: {Friend.website}</p>
        </div>
    );
};

export default FriendDetail;