import { useForm } from '@inertiajs/react';
import './Auth.css'
import { Link } from '@inertiajs/react';
import google from '../../assets/google.png';
export default function Login() {
  const { data, setData, post, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login');
  };

  return (

      <form className='container' onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <div className='group'>
          <input className='input-l'
            placeholder='Email'
            type="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            required
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>
        <div className='group'>
          <input className='input-l'
            placeholder='Password'
            type="password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            required
          />
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked)}
            />
            Remember Me
          </label>
        </div>
        <h3 id='pass'>
            Forgot Your Password?
        </h3>
        <button id='logbtn' type="submit">Login</button>
        <div className="img-container">
                <Link href='https://google.com'>
                    <img className='img' src={google} alt="google" />
                </Link>
        </div>
        <h3 id='sign'>New Here? <span>Sign in</span></h3>

      </form>
  );
}