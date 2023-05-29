import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'


import Login from './pages/Login'
import { RequireAuth } from './contexts/Auth/RequireAuth';

function Rota() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={
                <RequireAuth>
                    <Home />
                </RequireAuth>
            } />
            <Route path="/sobre" element={
                <RequireAuth>
                    <div>
                        Sobre
                    </div>
                </RequireAuth>
            }
            />
            <Route path="*" element={
                <RequireAuth>
                    <div>
                        Nada aqui amigo
                    </div>
                </RequireAuth>
            }
            />
        </Routes>
    );
}

export default Rota;