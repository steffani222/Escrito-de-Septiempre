import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Users from './pages/Users';
import UserPais from './pages/UserPais';

function App() {
  return (
 <Router>
  <div>
  <nav>
  <ul>
 <li>
 <Link to="/usuarios">Ver usuarios</Link>
  </li>
   <li>
  <Link to="/usuarios/es">Ver usuario por país</Link>
  </li>
   </ul>
  </nav>

  <Routes>
  <Route path="/usuarios" element={<Users />} />
  <Route path="/usuarios/:country" element={<UserPais />} />
  </Routes>
 </div>
    </Router>
  );
}

export default App;
