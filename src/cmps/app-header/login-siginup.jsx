import { TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { socketService } from '../../services/socket.service'
import { userService } from '../../services/user.service'
import { onLogin, onSignup } from '../../store/user/user.actions'
import { AirBnbBtnBo } from '../user-back-office/AirBnb-Btn-bo'
import { ImgUploader } from './img-uploader'

export function LoginSignUp({ openMsg }) {
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isLogin, setIsLogin] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        return setIsLogin(true)
    }, [])

    const clearState = () => {
        setCredentials({ username: '', password: '' })
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
        document.body.classList.toggle("login-screen-open");
        document.body.classList.toggle("login-slide-modal-open");
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
        document.body.classList.toggle("login-screen-open");
        document.body.classList.toggle("login-slide-modal-open");
    }


    return (
        <div className="login-page">

            {isLogin && < div>

                <div className='signup-welcome-headding'>
                    <h2 >Login</h2>
                </div>

                <form className="login-form" onSubmit={onLoginUser}>
                    <TextField type="text" label="Username" variant="filled" id="filled-basic" name="username" placeholder="Username" value={credentials.username} required autoFocus onChange={handleChange} />
                    <TextField type="password" label="Password" variant="filled" id="filled-basic" name="password" placeholder="Password" value={credentials.password} required autoFocus onChange={handleChange} />
                    <div onClick={onLoginUser}>
                        <AirBnbBtnBo btnInnerTxt='Login' />
                    </div>
                </form>
                <div className='signup-welcome-headding'>
                    <h4 onClick={() => setIsLogin(false)}>New to AirZula? </h4>
                </div>
            </div>}
            {!isLogin && <div className="signup-section">
                <div className='signup-hedding-flex'>
                    <h2>Sign up</h2>
                </div>
                <div className='signup-welcome-headding'>
                    <h2>Welcome to AirZula</h2>
                </div>
                <form className="login-form" onSubmit={onSignupUser}>
                    <TextField type="text" label="Full name" variant="filled" id="filled-basic" name="name" placeholder="Full name" value={credentials.fullname} required autoFocus onChange={handleChange} />
                    <TextField type="text" label="Username" variant="filled" id="filled-basic" name="username" placeholder="Username" value={credentials.username} required autoFocus onChange={handleChange} />
                    <TextField type="text" label="Password" variant="filled" id="filled-basic" name="password" placeholder="password" value={credentials.password} required autoFocus onChange={handleChange} />
                    <TextField type="text" label="Username" variant="filled" id="filled-basic" name="username" placeholder="Username" value={credentials.username} required autoFocus onChange={handleChange} />
                    <TextField type="email" label="Email" variant="filled" id="filled-basic" name="email" placeholder="Email" value={credentials.email} required autoFocus onChange={handleChange} />
                    {/* <input
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
                    /> */}
                    <br />
                    <ImgUploader onUploaded={onUploaded} />
                    <div onClick={onSignupUser} >
                        <AirBnbBtnBo btnInnerTxt='Sign up' />
                    </div>
                </form>
                <div className='signup-welcome-headding'>
<h4 onClick={() => setIsLogin(true)}>Already have an account?</h4>
                </div>
            </div>}

        </div>
    )
}
