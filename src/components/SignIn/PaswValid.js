import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import SignInAction from '../redux/actions/SignInAction';
import './style.css';

const LOGIN = 'http://3.209.97.189:8090/api/auth/v1/web/sign-in';

export default function PaswValid() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const select = useSelector(state => state.signIn.users);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);

        try {
            const response = await axios.post(LOGIN, {
                email: email,
                password: password,
            });

            // console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.data?.accessToken;
            console.log(accessToken);
            dispatch(
                SignInAction({
                    email: email, 
                    password: password, 
                    token: accessToken 
                })
            );
            setEmail('');
            setPassword('');
            navigate('/users/push-notification/user-data-table');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
    }

    return (
        <div>
            <div className='content'>
                <p className='error'>{errMsg}</p>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email" 
                        required
                        name="emial"
                        value={ email }
                        onChange={handleChangeEmail}
                    />
                    <label>Password</label>
                    <input
                        type="password" 
                        required
                        name="password"
                        value={ password }
                        onChange={handleChangePassword}
                    />
                    <button>Login</button>
                </form>
                <Link to = "pasw-forgot">
                    <p>Forgot your password?</p>
                </Link>
                
            </div>
        </div>
    )
}