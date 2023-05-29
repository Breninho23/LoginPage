import './App.css'
import { BrowserRouter } from "react-router-dom";

import Rota from './Routes'
import { AuthProvider } from './contexts/Auth/AuthProvider';



function App() {  
  

  return (    
    <div>    
      
      <BrowserRouter>
        <AuthProvider>
          <Rota/>
        </AuthProvider>        
      </BrowserRouter>
      
    </div>  
  )
}

export default App
