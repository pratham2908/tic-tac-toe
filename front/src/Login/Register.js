const Register = (props) => {
    return (
        <div class="register">
            <form>
                <label for="name">name</label>
                <input type="text" placeholder="name" id="name" />
                <label for="username">Username</label>
                <input type="text" placeholder="username" id="username" />
                <label for="email">email</label>
                <input type="email" placeholder="email" id="email" />
                <label for="password">Password</label>
                <input type="password" placeholder="password" id="password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;