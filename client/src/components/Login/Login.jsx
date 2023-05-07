import "./Login.css"

const Login = () => {


    return (
        <div className="Login">
            <h1>Log in Supplies & Training</h1>
            <form>
                <input type="text" name="username"></input>
                <input type="password" name="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;

