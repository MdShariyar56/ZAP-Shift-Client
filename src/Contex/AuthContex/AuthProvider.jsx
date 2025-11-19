import React, { useEffect, useState } from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({  children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

   

    const registerUser = (email, password)  => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signInUSer = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInGoole = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const  logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currenrUser) =>{
            setUser(currenrUser);
        })
        return () =>{
            unSubscribe();
            setLoading(false);
        }

    },[])

    const authInfo = {
        user,
        loading,
        registerUser,
        signInUSer,
        signInGoole,
        logOut

    }
    return (
       <AuthContex value={authInfo}>
            {children}
       </AuthContex>
    );
};

export default AuthProvider;