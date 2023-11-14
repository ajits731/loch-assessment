import { useState } from 'react';
import './SignUp.css'

const Signup = () => {
    const [userEmail, setUserEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({})
    const handleSubmit = () => {
        if(userEmail.includes('@') && userEmail.includes('.')) {
            setError({});
            setSuccess(true);
            setTimeout(()=> {
                window.location.href = 'https://app.loch.one/welcome';
            }, 3000);
        } else {
            setSuccess(false);
            setError({
                errorMessage: 'Please enter a valid email',
                error: true
            })
        }
    }

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            handleSubmit()
        }
    }
    return (
        <div id="signup">
            <h1>Sign up for exclusive access.</h1>
            <input onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => setUserEmail(e.target.value)} type='text' placeholder="Your email address" />
            <br></br>
            {!success ? <button onClick={handleSubmit} className='btn btnsignup'>Get Started</button> : <p className='success'><span className='dots'></span>You're being redirected</p>}
            {error.error && <label className='error'>*{error.errorMessage}</label>}
            <p>You'll receive an email with an invite link to join</p>
        </div>
    )
}

export default Signup;