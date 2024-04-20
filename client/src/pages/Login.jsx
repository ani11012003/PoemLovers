import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../store/auth.jsx";
import {toast} from "react-toastify";
const Login=()=>{
    const [user,setUser]= useState({
        email:"",
        password:"",
    });
    const navigate=useNavigate();

    const {storeToken,API}=useAuth();
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
     //handling the submission of login form
     const handleSubmit=async (e)=>{
         e.preventDefault();
         console.log(user);
         try {
            const response=await fetch(`${API}/api/auth/login`,{
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
            toast("Login Successful");
            setUser({email:"",password:""});
            navigate("/");
        }
        else{
            toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
        }
        console.log("login form"+response);
        } catch (error) {
            console.log(error);
        }
        
     }
    return (<>
<section>
        <main>
            <div className="section-login">
                <div className="container grid grid-two-cols">
                    <div className="login-image">
                        <img src="" alt="fill the login form" width="500px" height="500px"/>
                    </div>
                    <div className="login-form">
                        <h1 className="main-heading mb-3">Login form</h1>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <br></br>
                                <label htmlFor="email">email</label>
                                <br></br>
                                <input type="email" name="email" placeholder="Enter your email" value={user.email} onChange={handleInput}
                                    id="email" required autoComplete="off"></input>
                            </div>
                            <div>
                            <br></br>
                                <label htmlFor="password">password</label>
                                <br></br>
                                <input type="password" name="password" placeholder="Enter your password" value={user.password} onChange={handleInput} id="password" required autoComplete="off"></input>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-submit" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>);
}
export default Login;