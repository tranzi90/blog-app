import CustomInput from "../components/UI/input/CustomInput";
import CustomButton from "../components/UI/button/CustomButton";
import {useContext} from "react";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    function login(event) {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <CustomInput type='text' placeholder='Enter your login' />
                <CustomInput type='password' placeholder='Enter your password' />
                <CustomButton>Sign In</CustomButton>
            </form>
        </div>
    );
};

export default Login;