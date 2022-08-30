const Login = (props) => {
    return (
        <div class="login">
            <form>
                <label for="username">Username/Email</label>
                <input type="text" placeholder="username" id="username" />
                <label for="password">Password</label>
                <input type="password" placeholder="password" id="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;