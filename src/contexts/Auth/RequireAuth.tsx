import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/Login";

export const RequireAuth = ({children} : {children: JSX.Element}) =>{
    const auth = useContext(AuthContext)

    if(!auth.user){
        console.log("i rapaz")
        return <Login/>
    }


    return children;
}