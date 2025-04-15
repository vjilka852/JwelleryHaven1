import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // on load
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId && !user) {
      axios.get(`http://localhost:3001/user/${userId}`)
        .then(res => {
          if (res.data.success) setUser(res.data.user);
        })
        .catch(err => console.log(err));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("userId", userData._id);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
