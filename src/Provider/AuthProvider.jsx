import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config,";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Check local storage for user info on initial load
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  // Google provider
  const provider = new GoogleAuthProvider();

  // Google sign in
  const GoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Register
  const Register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Update = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  // User save
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // Save user info to local storage
      if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("user");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Login with email
  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out
  const Logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = { Register, Update, Login, GoogleLogin, user, Logout };
  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
