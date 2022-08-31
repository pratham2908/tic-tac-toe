import { Link, useNavigate } from "react-router-dom";

const Register = (props) => {
    const navigate = useNavigate();
    function goToLogin() {
        navigate("/login").then(() => {
            window.location.reload();
        });
    }

    function handleClick(e) {
        e.preventDefault();
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        const password2 = document.querySelector("#password2").value;
        const email = document.querySelector("#email").value;
        const data = {}
        if (password !== password2) {
            data = { username, password, email };
        } else {
            alert("Passwords do not match");
        }

    }
    return (
        <div className="register">
            <header>
                <Link to={"/"} ></Link>
                <span>TIC-TAC-TOE</span>
            </header>
            <form>

                <label htmlFor="username">Username</label>
                <input type="text" id="username" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" id="password2" required />
                <button type="submit" onClick={handleClick}>Register</button>
            </form>
            <div className="loginLink" style={{ "marginTop": 20 }}>
                <span>Already have an account?</span>
                <span> <Link to="/login" onClick={goToLogin}>Login</Link> </span>

            </div>
        </div>
    )
}

export default Register;