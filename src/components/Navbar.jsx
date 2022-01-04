import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Header, Button } from "./NavbarStyle";
 
export const Navbar = () => {

    const { status, toggleStatus } = useContext(AuthContext);

    return (
        <Header>Navbar
            <Button onClick={() => toggleStatus()}>{status ? "Logout" : "Login"}</Button>
        </Header>
    )
};