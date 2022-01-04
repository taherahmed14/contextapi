import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Status } from "./Login";

export const UserToken = () => {
    const { token } = useContext(AuthContext);

    return(
        <div>
            <Status>{token}</Status>
        </div>
    )
}