import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    function goToRegister() {
        navigate("/register").then(() => {
            window.location.reload();
        })
    }
    return (
        <div className="login">
            <header>
                <Link to={"/"} ></Link>
                <span>TIC-TAC-TOE</span>
            </header>
            <form>
                <label htmlFor="username">Username/Email</label>
                <input type="text" id="username" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
                <button type="submit">Login</button>
            </form>
            <div className="registerLink" style={{ "marginTop": 20, "fontSize": 20 }}>
                <span>New to Tic-Tac-Toe? </span>
                <Link to="/register" onClick={goToRegister}>Register</Link>

            </div>
        </div>
    )
}

export default Login;