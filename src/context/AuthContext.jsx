import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('gori_admin_auth');
    if (loggedIn === 'true') {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const login = (password) => {
    if (password === 'admin123') {
      setIsAdminLoggedIn(true);
      localStorage.setItem('gori_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('gori_admin_auth');
  };

  return (
    <AuthContext.Provider value={{ isAdminLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
