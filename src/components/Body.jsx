import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navbar } from "./Navbar"
import { UserToken } from "./Token"
import { UserDetail } from "./UserDetail"

export const Body = () => {
    const { status, tokenStatus } = useContext(AuthContext);

    return(
        <div>
            <Navbar />
            {status ?
                <UserDetail /> : "No User Found"
            }
            {tokenStatus ?
                <UserToken /> : null
            }
             
            
        </div>
    )
}