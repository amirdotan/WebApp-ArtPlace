import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged, 
         getAuth } from 'firebase/auth'
import { auth, db } from "../firebase";
import { addDoc, collection, setDoc, doc} from "firebase/firestore";
import {ref, set } from "firebase/database";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
// {first_name_d, last_name_d, short_description_d, skills_d, email_d, field_d}
    const addToUserdb = (user_details) => {
      const auth = getAuth();
      const user = auth.currentUser;
      const user_col_ref = collection(db, 'users')
      setDoc(doc(user_col_ref, 'user_'+user.uid),{
        first_name : user_details.first_name,
        last_name : user_details.last_name,
        short_description : user_details.short_description,
        skills : user_details.skills,
        email : user_details.email,
        field : user_details.field,
        uid : user.uid
      });
    }

      // this also works but the function above sets the documents name
      // addDoc(user_col_ref, {
      //       first_name : user_details.first_name,
      //       last_name : user_details.last_name,
      //       short_description : user_details.short_description,
      //       skills : user_details.skills,
      //       email : user_details.email,
      //       field : user_details.field,
      //       uid : user.uid
      //     }).then(() => {
      //       console.log('user added to to user collection')
      //       // console.log(user)
      //     });
      //   }

 
     const signIn = (email, password) =>  {
      return signInWithEmailAndPassword(auth, email, password)
     }
  
    const logout = () => {
        return signOut(auth)
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <UserContext.Provider value={{ createUser, user, logout, signIn, addToUserdb }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const UserAuth = () => {
    return useContext(UserContext);
  };
