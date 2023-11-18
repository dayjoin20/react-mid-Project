import "./App.css";
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import Home from "./component/home";
import Welcome from "./component/welcome";
import Sorry from "./component/sorry";
import Profile from "./component/profile";
import { Navigate } from "react-router-dom";
import Protected from "./component/protected";
import { useState } from "react";
import userContext from "./component/usercontext";
import { GoogleLogin, GoogleOAuthProvider, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Dialog } from '@headlessui/react'
import MyModal from "./component/model";


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  const responseMessage = (response) =>{
    console.log(response);
  };

  const errorMessage = (error) =>{
    console.log(error);
  };

  const logIn = useGoogleLogin({
    onSuccess: (response) => {
      console.log('token',response.access_token);
      setisLoggedIn(true);
      setfName("Dechopon");
      setlName("Sinchai");

      
    }
      ,
      onError: (error) => console.log('Login Failed:',error)
  });

  const logOut = () => {
    googleLogout();
    setisLoggedIn(false);
  };

  return (
    
    <userContext.Provider value={{fName,lName}}>
    <Router>
      <div>
        {isLoggedIn ? (
          <>
          <button class="button-24" role="button" onClick={logOut}>Logout</button>
          <Navigate to ="/Profile" replace /> 
          </>
          //วิธีกด login แล้วไปหน้า ลิ้งไปหน้า welcome <Navigate to ="/Welcome" replace /> 
        ) 
        : 
        (
          <>
          
          <button class="button-49" role="button" onClick={logIn}>Login with Google</button>
          <Navigate to ="/" replace />
          </>
        )}  

        <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/welcome" 
          element={
          <Protected isLoggedIn={isLoggedIn}>
            <Welcome/>
            </Protected>
            }
          />
        <Route path="/sorry" element={<Sorry />} />

        <Route path="/profile" element={<Profile />} />
        </Routes>
        
      </div>
    </Router>
    </userContext.Provider>
  );
}

export default App;


