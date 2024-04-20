/* eslint-disable no-undef */
import { createContext,useContext, useEffect } from "react";
import { useState } from "react";
export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
export const  AuthProvider=({ children })=>{
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,SetUser]=useState("");
    const [isLoading,setIsLoading]=useState(true);
    const [services,setServices]=useState([]);
    const authToken=`Bearer ${token}`;
    const API=import.meta.env.VITE_APP_URI_API;
    const storeToken=(serverToken)=>{
        setToken(serverToken);
         return localStorage.setItem("token",serverToken);
    }
    const isLoggedIn=!!token;
    
    // solve the logout functionality
    const LogoutUser=()=>{
        setToken("")
        return localStorage.removeItem("token");
    }
    // JWT Authentication to get currently logged in user data
    const userAuthentication= async ()=>{
         try {
            setIsLoading(true);
            const response =await fetch("http://localhost:5000/api/auth/user",{
                method: "GET",
                headers:{
                  "Authorization": authToken,
                },
            });
            if(response.ok){
                const data =await response.json();
                console.log("user data",data.userData);
                SetUser(data.userData);
                setIsLoading(false);
            }
            else{
                console.log("error fetching user data");
                setIsLoading(false);
            }
         } catch (error) {
            console.log("Error fetching the user data");
         }
    }
    // to fetch the data of services from database
    const getServices=async ()=>{
        try {
            const response=await fetch("http://localhost:5000/api/data/service",{
                method: "GET",
            });
            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log(`services frontend error:- ${error}`);
        }
    }
    useEffect(()=>{
       getServices();
       userAuthentication()
    },[]);
    return <AuthContext.Provider value={{user,isLoggedIn,storeToken,LogoutUser,services,authToken,isLoading,API}}>
        {children}
    </AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
          throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
}