import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const PaswFrgLink = "http://3.209.97.189:8090/api/auth/v1/web/forgot-password";

function PaswForgot() {
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);

        try {
            const response = await axios.post(PaswFrgLink, 
                {
                    email: email,
                } 
            );

            navigate('/');
            setEmail('');


        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email</span>
                    <input
                        type="email" 
                        required
                        name="emial"
                        value={ email }
                        onChange={handleChangeEmail}
                    />
                </label> 
                <button>Send Email</button> 
            </form>
        </div>
    )

}


export default PaswForgot;