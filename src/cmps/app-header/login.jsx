import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userService } from '../../services/user.service'
import { onLogin } from '../../store/user/user.actions'

export function Login(props) {
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const dispatch = useDispatch()

    const clearState = () => {
        setCredentials({ username: '', password: ''})
    }

    const handleChange = ev => {
        const field = ev.target.name;
        const value = ev.target.value;
        setCredentials({ ...credentials, [field]: value });
    }

    const onLoginUser = (ev = null) => {
        if (ev) ev.preventDefault();
        debugger
        dispatch(onLogin(credentials));

        clearState()
        document.body.classList.toggle("login-page-open");
    }

    
    return (
        <div className="login-page">

            <button className='move-to-signup'>Sign Up</button>


            <form className="login-form" onSubmit={onLoginUser}>
                <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        value={credentials.username}
                        required
                        autoFocus
                    />
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                <button className='login-btn'>Login!</button>
            </form>         
        </div>
    )
}
