import React from 'react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
function ShowUser() {
    const { user } = usePage().props;
    if (!user) {
        return <div>User not found</div>;
    }
    return (
        <div>
            <h1>User Dashboard</h1>
            <p>Welcome, {user.name}!</p>
            <p>Email: {user.email}</p>
            <p>Joined on: {new Date(user.created_at).toLocaleDateString()}</p>
            <p>Last updated: {new Date(user.updated_at).toLocaleDateString()}</p>
            <Link href='/logout' method='post'>Logout</Link>
            <Link href='/delete' method='post'>Delete Account</Link>
        </div>
    );
}

export default ShowUser;