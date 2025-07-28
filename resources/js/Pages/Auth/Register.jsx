import React from 'react';
import { useForm,Link } from '@inertiajs/react';
import './Auth.css';
import '../../../css/app.css';
import google from  '../../assets/Google.png';

function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '', // Laravel expects 'password_confirmation'
    });

    const handleChange = (e) => {
        const { name, type, value, files } = e.target;
            setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('password_confirmation', data.password_confirmation);
        post('/register', { forceFormData: true });
    };

    return (
        <form className='container' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold mb-4'>Register</h1>
            <input required className='input-l' type="text" name="name" value={data.name} onChange={handleChange} placeholder="Name" />
            <input required className='input-l' type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email" />
            <input required className='input-l' type="password" name="password" value={data.password} onChange={handleChange} placeholder="Password" />
            <input required className='input-l' type="password" name="password_confirmation" value={data.password_confirmation} onChange={handleChange} placeholder="Confirm Password" />
            <h1 className='text-l font-bold mb-4'>Or log in with google</h1>
            <img className='w-9' src={google} alt="Google logo" />
            <h3 className='text-lg font-bold'>Already have an account? <Link href='/login'><span className='text-red-700 text-lg font-bold'>Log in</span></Link></h3>
            <button id='logbtn' type="submit" disabled={processing}>Register</button>
        </form>
    );
}

export default Register;