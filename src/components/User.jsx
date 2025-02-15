import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            });
    }, [userId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>User Page</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phon: {user.phone}</p>
        </div>
    );
};

export default User;
