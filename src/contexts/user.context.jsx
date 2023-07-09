import { createContext,useState , useEffect} from "react";
import { createUserDocumentfromAuth, onAuthStateChangedListner , signOutUser} from "../utils/firebase/firebase.utils";

export const UserContext = createContext ({
setCurrentUser : () => null ,
    currentUser : null ,

});


export const UserProvider = ({children}) =>{
    const [currentUser , setCurrentUser] = useState(null);

    const value = {currentUser , setCurrentUser};



   useEffect(() => {
      const unsubcribe =   onAuthStateChangedListner((user)=>{

        if(user){

            createUserDocumentfromAuth(user);
        }
        setCurrentUser(user);
      } );

      return unsubcribe
    },[]);


    return <UserContext.Provider value = {value}>{children}</UserContext.Provider>


}