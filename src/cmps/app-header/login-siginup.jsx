import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userService } from '../../services/user.service'
import { onLogin, onSignup } from '../../store/user/user.actions'
import { ImgUploader } from './img-uploader'

export function LoginSignUp(props) {
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isLogin, setIsLogin] = useState(true)
    const dispatch = useDispatch()

    useEffect( () => {
       return setIsLogin(true)
    }, [])

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
        dispatch(onLogin(credentials));

        clearState()
        document.body.classList.toggle("login-page-open");
    }

    const onUploaded = (imgUrl) => {
        setCredentials({ ...credentials, imgUrl });
    }

    const onSignupUser = (ev = null) => {
        if (ev) ev.preventDefault();
        if (!credentials.username || !credentials.password || !credentials.fullname) return;
        dispatch(onSignup(credentials));
        clearState()
        document.body.classList.toggle("login-page-open");
    }

    
    return (
        <div className="login-page">

            {isLogin &&< div>
           <button className='move-to-signup' onClick={() => setIsLogin(false)}>Sign Up</button>

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
           </div>}
            {!isLogin && <div className="signup-section">
                <form className="login-form" onSubmit={onSignupUser}>
                    <input
                        type="text"
                        name="fullname"
                        value={credentials.fullname}
                        placeholder="Fullname"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <ImgUploader onUploaded={onUploaded}/>                    
                    <button >Signup</button>
                </form>
            </div> }

        </div>
    )
}
