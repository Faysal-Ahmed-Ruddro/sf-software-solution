import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeFirebaseApp from "../Firebase/Firebase.init";

initializeFirebaseApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // googleSignIn
  const googleSignIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // githubSignIn
  const githubSignIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // new user register
  const registerNewUser = (email, password, name, location, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // redirecting to destination
        const destination = location?.state?.from || "/";
        navigate(destination);
        //  removing error form state
        setError("");

        const newUser = { email, displayName: name };
        setUser(newUser);
        // saveUser to database
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          // Profile updated!
        });
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };
  // sign In user
  const signInUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        setError({});
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    isLoading,
    logOut,
    googleSignIn,
    githubSignIn,
    registerNewUser,
    signInUser,
  };
};

export default useFirebase;
