import React from 'react';
import { useForm } from '@inertiajs/react';

function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        profilepicture: null,
        password: '',
        password_confirmation: '', // Laravel expects 'password_confirmation'
    });

    const handleChange = (e) => {
        const { name, type, value, files } = e.target;
        if (type === 'file') {
            setData(name, files[0]);
        } else {
            setData(name, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Name" />
            <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email" />
            <input type="file" name="profilepicture" onChange={handleChange} />
            <input type="password" name="password" value={data.password} onChange={handleChange} placeholder="Password" />
            <input type="password" name="password_confirmation" value={data.password_confirmation} onChange={handleChange} placeholder="Confirm Password" />
            <button type="submit" disabled={processing}>Register</button>
        </form>
    );
}

export default Register;