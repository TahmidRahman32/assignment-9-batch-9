import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)
 
   const createUsers = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   };
   const userInfo = {
      user,
      loading,
      createUsers,
   };

   
   return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
