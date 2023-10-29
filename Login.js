import { Fragment,useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './Login.css';


const Login = () => {

    const [isSubmited, setSubmited] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        setSubmited(true);
    }
    const buttonHandler = () => { 
        setSubmited(false);
    }
    return (
        <Fragment>
            <div className="wrapper">
                <div className="left-section">
                    <div className="left-content">
                        <svg width="150" height="140" xmlns="http://www.w3.org/2000/svg" className="svg-container">
                            <image href="/assets/download.png" width="150" height="140" alt="DownloadImage" className="svg-img" />
                        </svg>
                        <h1>Welcome to<span>oneCrew</span> </h1>
                        <p>Success with our Software Products. Feel free to join us.<span>Let's starts today!</span></p>
                    </div>
                </div>
                <div className="right-section">

                    <form className="form" onSubmit={submitHandler}>
                        <div className="right-side-header">
                            <h2>Login</h2>
                            <p>Your Gateway to Tech Brilliance</p>
                        </div>
                        <div className="input-fields">
                            <input className="_input" type="email" placeholder="Email"></input><br />
                            <input className="_input" type="password" placeholder="Password"></input>
                        </div>
                        <div className="_checkbox">

                            <div className="left-box">
                                <input type="checkbox" required/><p className="remember-me" >remember me</p>
                            </div>
                            <div className="right-box">
                                <p>forgot password?</p>
                            </div>


                        </div>
                        <div className="_button">
                            <button type="submit">Login</button>
                        </div>
                        <div className="no-account">
                            <p>Does not have an account yet? <Link to='/register'><span>Register</span></Link></p>
                        </div>

                    </form>
                </div>
            </div>
            {
                isSubmited &&
                <div className="overlay">
                    <div className="overlay-content">
                        <h2>Login Successfully</h2>
                        <button onClick={buttonHandler}>Okay</button>
                    </div>
                </div>
            }
        </Fragment>
    );
}

export default Login;