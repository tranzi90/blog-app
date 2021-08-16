import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import CustomButton from "../button/CustomButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <CustomButton onClick={logout}>
                Logout
            </CustomButton>
            <div className="navbar__links">
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;