import {  useEffect, useState, createContext } from "react"
import { useApi } from "../../hooks/useApi"
import { User } from "../../interface/IUser"

export type AuthContextType ={
    user: User | null;
    signin: (login:string, passowrd: string) => Promise<boolean>;
    signout: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({children} : {children: JSX.Element}) => {
    

    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    
    useEffect(() => {        
        validateToken();        
    }, []);

    const validateToken = async () => {
        const storageData = localStorage.getItem('authToken');
        if(storageData != null){            
            const data = await api.validateToken(storageData);
            if(data.user){
                setUser(data.user)
            }
        }
    }

    const signin = async (login:string, senha: string) => {
        try {            
            const data = await api.signin(login , senha);
            if(data.token && data.user){ 
                saveToken(data.token)
                setUser(data.user)
                return true
            }
            return false;
        }catch (error) {
            console.log(error);
            return false;
        }        
    }

    const signout = async () => {
        await api.logout();
        setUser(null);
        localStorage.clear();
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