import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { LoginBox, Input, Submit } from "./Login";

export const UserDetail = () => {
    const { toggleAuth } = useContext(AuthContext); 
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        console.log("Working");
        const { name, value } = e.target;
        setUser({...user, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Working");
        console.log(user);
        toggleAuth(user.email, user.password);
    }

    return (
        <LoginBox>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <Input onChange={handleChange} name="email" type='text' placeholder="Enter Email" />
                <Input onChange={handleChange} name="password" type='password' placeholder="Enter Password" />
                <Submit type='submit' value='submit'/> 
            </form>
        </LoginBox>
    )
}