import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div>
      <p>Login</p>
      <NavLink to="/registry">Registry</NavLink>
    </div>
  );
}

export default Login;
