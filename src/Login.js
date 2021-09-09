import React from 'react'

const Login = (props) => {
    const {email,setEmail,password,setPassword,handlelogin,handleSignup,hasAcount,sethasAcount,emailError,passwordError} = props;
    return (
        <section className="login">
        <div className="loginContainer">
            <label>Username</label>
            <input type='text' autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="errorMsg">{emailError}</p>

            <label>Password</label>
            <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />


            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {hasAcount ? (
                    <>
                        <button type="button" className="btn btn-primary" onClick={handlelogin} >Sign in</button>
                        <p>

                            don't have an account ?
                        <span onClick={() => sethasAcount(!hasAcount)}>sign up</span></p>

                    </>) : (
                        <>
                            <button type="button" className="btn btn-primary" onClick={ handleSignup} >Sign up</button>


                            <p> have an account ? <span onClick={() => sethasAcount(!hasAcount)}>sign in</span></p>

                        </>
                    )

                }
            </div>
            <div className="demo">
                <p> Use this as guest login </p>
                <p>Email : admin@admin.com</p>
                <p>pass : 123123</p>

            </div>

        </div>

    </section>
    )
}

export default Login
