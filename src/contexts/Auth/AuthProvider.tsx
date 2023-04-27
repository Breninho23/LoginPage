import {  useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { useApi } from "../../hooks/useApi"
import { User } from "../../interface/IUser"

export const AuthProvider = ({children} : {children: JSX.Element}) => {

    const [user, setUser] = useState<User | null>(null)
    const api = useApi()

    
    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if(storageData != null){
                const data = await api.validateToken(storageData);
                if(data.user){
                    setUser(data.user)
                }
            }
        }
        validateToken();
    }, [api]);

    const signin = async (login:string, senha: string) => {
        try {
            const data = await api.signin(login , senha);    
            console.log("paçoca")
            if(data.token && data.user){ 
                saveToken(data.token)
                return true
            }
            return false;
        }catch (error) {
            console.error(error);
            return false;
        }
        
    }

    const signout = async () => {
        await api.logout();
        setUser(null);
    }

    const saveToken = (token : string) => {
        localStorage.setItem('authToken' , token);
    }



    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}