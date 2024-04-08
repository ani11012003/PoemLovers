import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../store/auth.jsx";
import {toast} from "react-toastify";
const Register=()=>{
    const [user,setUser]= useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });
    const navigate=useNavigate();
    const {storeToken}=useAuth();
    //handling the input
    const handleInput=(e)=>{
       console.log(e);
       let name=e.target.name;
       let value=e.target.value;

       setUser({
        ...user,
        [name]:value,
       });
    }
    //handling the submission of register form
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(user);
        try {
            const response=await fetch(`http://localhost:5000/api/auth/register`,{
         method:"POST",
         headers:{
         'Content-Type': 'application/json',
         },
         body: JSON.stringify(user)
        });
        const res_data= await response.json();
        console.log(res_data);
        if(response.ok){
            // localStorage.setItem("token",res_data.token);
            storeToken(res_data.token);
            toast("Registration Successful");
            setUser({username:"",email:"",phone:"",password:""});
            navigate("/");
        }
        else{
            toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
        }
        console.log(response);
        } catch (error) {
            console.log(error);
        }
        
    }
    return (<>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img src="" alt="fill the registration form" width="500px" height="500px"/>
                    </div>
                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registration form</h1>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <br></br>
                                <label htmlFor="username">username</label>
                                <br></br>
                                <input type="text" name="username" placeholder="Enter your username" value={user.username} onChange={handleInput} id="username" required autoComplete="off"></input>
                            </div>
                            <div>
                            <br></br>
                                <label htmlFor="email">email</label>
                                <br></br>

                                <input type="email" name="email" placeholder="Enter your email" value={user.email} onChange={handleInput}
                                    id="email" required autoComplete="off"></input>
                            </div>
                            <div>
                            <br></br>
                                <label htmlFor="phone">phone</label>
                                <br></br>
                                <input type="number" name="phone" placeholder="Enter your phone" value={user.phone}  onChange={handleInput}id="phone" required autoComplete="off"></input>
                            </div>
                            <div>
                            <br></br>
                                <label htmlFor="password">password</label>
                                <br></br>
                                <input type="password" name="password" placeholder="Enter your password" value={user.password} onChange={handleInput} id="password" required autoComplete="off"></input>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-submit" >Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>);
}
export default Register;