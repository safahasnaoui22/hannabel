import { createContext, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"

const userAuthContext = createContext();
export function UserAuthContextProvider({ childern }) {
    function singUp(email, password) {
        return createUserWithEmailAndPassword(email, password);
    }
    return (
        <UserAuthContext.Provider value={ }>
            {childern}
        </UserAuthContext.Provider>
    )
}
export function useUserAuth() {
    return useContext(userAuthContext);
}