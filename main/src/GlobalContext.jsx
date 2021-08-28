import React , {useState,useEffect} from 'react';
import firebase from "firebase/app"

if (firebase.apps.length === 0) {
    firebase.initializeApp({
        apiKey: "AIzaSyCLdkyXtgFSLKGgL-Xp41A87ZZQgKhE2JY",
        authDomain: "goodyearstaff-44a5f.firebaseapp.com",
        projectId: "goodyearstaff-44a5f",
        storageBucket: "goodyearstaff-44a5f.appspot.com",
        messagingSenderId: "884052247282",
        appId: "1:884052247282:web:c789f480d0e57a3005c66b",
        measurementId: "G-29DBLDBMEW"
      
    });
}

export const ConfigContext = React.createContext()

const GlobalContext = (props) => {
    const [authenticated, setAuthenticated] = useState(false)
    return(
        <ConfigContext.Provider value = {{
            authenticatedStatus:authenticated,
            setAuthenticated,
        }}>
            {props.children}
        </ConfigContext.Provider>
    )

}

export default GlobalContext