import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [status, setStatus] = useState(false);
    const [token, setToken] = useState("");
    const [tokenStatus, setTokenStatus] = useState(false);

    const toggleStatus = () => {
        setStatus(!status);
        setTokenStatus(false);
    }

    const toggleAuth = (email, password) => {
        if(status){
            console.log("working");
            const userData = { 
                email,
                password
            }
            fetch("https://reqres.in/api/login", {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "content-type": "application/json"
                } 
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.token);
                setToken(`Login succesfull!! Your token: ${data.token}`);
                setTokenStatus(true);
            })
        };
    }

    return (
        <AuthContext.Provider value={{ status, token, tokenStatus, toggleAuth, toggleStatus }}>{children}</AuthContext.Provider>
    )
}