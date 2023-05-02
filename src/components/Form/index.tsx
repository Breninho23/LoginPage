import { useContext, useState } from 'react'
import Botao from '../Button'
import CampoTexto from '../InputText'
import './Form.css'
import { AuthContext } from '../../contexts/Auth/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    

    const efetuarLogin =  async (event: React.FormEvent<HTMLFormElement>) => {          
        event.preventDefault();     
        if(login != '' && senha != ''){            
            const isLogged = await auth.signin(login,senha);
            console.log("passei pelo método de logar")
            if(isLogged){
                navigate('/home')
            } else{
                console.log("Ta errado meu chapa")
            }
        }  
        setLogin('')
        setSenha('')     
    }

    return (
        <section className="formulario">
            <form onSubmit={efetuarLogin}>                
                <CampoTexto 
                    obrigatorio={true}
                    label="Login"
                    placeholder="Digite seu login" 
                    valor={login}
                    aoAlterado={valor => setLogin(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Senha"
                    placeholder="Digite suas senha...." 
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)}
                />                        
                <Botao>
                    Logar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario