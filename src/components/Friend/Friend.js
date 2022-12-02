import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;

    const navigate = useNavigate();

    const handleFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }

    return (
        <div>
            <h1>Name: {name}</h1>
            <button onClick={handleFriendDetail}>{username} id: {id}</button>
        </div>
    );
};

export default Friend;