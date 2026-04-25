import { createContext, useContext, useEffect, useState } from "react";
import { login as apiLogin, register as apiRegister, getMe } from "../services/authService";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session on page reload
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }
    getMe()
      .then((res) => setUser(res.data.user || res.data))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  /**
   * login(email, password)        — calls the API
   * login(token, userObject)      — used by Login/Register pages after a direct fetch
   */
  const login = async (emailOrToken, passwordOrUser) => {
    if (
      typeof emailOrToken === "string" &&
      typeof passwordOrUser === "string"
    ) {
      // Called as login(email, password)
      const res = await apiLogin({ email: emailOrToken, password: passwordOrUser });
      localStorage.setItem("token", res.data.token);
      const u = res.data.user;
      setUser(u);
      return u;
    } else {
      // Called as login(token, userObject) — already have the data
      const token = emailOrToken;
      const u = passwordOrUser;
      localStorage.setItem("token", token);
      setUser(u);
      return u;
    }
  };

  const register = async (payload) => {
    const res = await apiRegister(payload);
    localStorage.setItem("token", res.data.token);
    const u = res.data.user;
    setUser(u);
    return u;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
