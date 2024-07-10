import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './FirebaseConfig';
export const AuthContent = createContext(null)


const FirebaseProvider = ({ children }) => {



    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user);
    ///Social provider--
    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    ///Create uaser
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //// SignIn User
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    ///-------SignOut user-----
    const logOutUser = async () => {
        setUser(null)

        return signOut(auth)
            .then(() => {
                setLoading(false)
                toast.success('Logout Successfull')
            })
            .catch(error => (console.log(error.message)))
    }

    ///////Update Profile--------------
    const upDateProfile = (fullName, image) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName, photoURL: image
        })

    }
    ///------Social Login--------
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const githubLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    //observers---------------

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            setLoading(false);
        });
        return () => {
            return unsubscribe();
        };
    }, []);

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogIn,
        logOutUser,
        user,
        upDateProfile,
        loading
    }


    return (
        <AuthContent.Provider value={allValues}>
            {children}
        </AuthContent.Provider>
    );
};

export default FirebaseProvider;