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
  getIdToken,
} from "firebase/auth";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import initializeFirebaseApp from "../Firebase/Firebase.init";

initializeFirebaseApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // googleSignIn
  const googleSignIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // save user to MongoDB
        saveUserToDb(user.email, user.displayName, "PUT");

        // redirecting to destination
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
        // save user to MongoDB
        saveUserToDb(user.email, user.displayName, "PUT");

        // redirecting to destination
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
        //  removing error from state
        setError("");

        const newUser = { email, displayName: name };
        setUser(newUser);

        // saveUser to database
        saveUserToDb(email, name, "POST");
        // send name to firebase after creation
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
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // admin chacking
  useEffect(() => {
    fetch(`https://infinite-thicket-64777.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

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

  // save user
  const saveUserToDb = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://infinite-thicket-64777.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("DONE!", "Registered Successfully", "success");
        }
      });
  };

  return {
    user,
    token,
    admin,
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
