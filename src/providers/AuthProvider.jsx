import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //register user with email and pass
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  //login with email and pass
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //set user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log("user state changed");
      setUser(currentUser);
    });
    return () => {
      console.log("signed out");
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
