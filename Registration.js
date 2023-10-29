import { Fragment, useState } from "react"
import './Registration.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Registration = () => {

    const [isRegSubmited, setRegSubmited] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        setRegSubmited(true);
    }
    const buttonHandler = () => {
        setRegSubmited(false);
    }

    return (
        <Fragment>
            <div className="reg-wrapper">
                <div className="reg-left-section">
                    <div className="reg-left-content">
                        <svg width="150" height="140" xmlns="http://www.w3.org/2000/svg" className="reg-svg-container">
                            <image href="/assets/download.png" width="150" height="140" alt="DownloadImage" className="reg-svg-img" />
                        </svg>
                        <h1>Welcome to<span>oneCrew</span> </h1>
                        <p>Success with our Software Products. Feel free to join us.<span>Let's starts today!</span></p>
                    </div>
                </div>

                <div className="reg-right-section">

                    <form className="reg-form" onSubmit={submitHandler}>
                        <div className="reg-right-side-header">
                            <h2>Sign Up</h2>
                            <p>Your Gateway to Tech Brilliance</p>
                        </div>
                        <div className="reg-input-fields">
                            <input className="reg-input" type="text" placeholder="Username" required></input>
                            <input className="reg-input" type="email" placeholder="Email" required></input><br />
                            <input className="reg-input" type="password" placeholder="Password" required></input>
                            <input className="reg-input" type="password" placeholder="Confirm Password" required></input>
                        </div>

                        <div className="reg_button">
                            <button type="submit">Sign up</button>
                        </div>
                        <Link className="reg-account" to='/'>
                            <span>Already have an account?</span>
                        </Link>

                    </form>
                </div>
            </div>
            {
                isRegSubmited &&
                <div className="reg-overlay">
                    <div className="reg-overlay-content">
                        <h2>Signup Successfully</h2>
                        <button onClick={buttonHandler}>Okay</button>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Registration;