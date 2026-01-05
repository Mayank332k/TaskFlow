import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [credentials, setCredentials] = useState({
    id: "Xyz@gmail.com",
    pass: "123",
  });

  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        credentials,
        setCredentials,
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
