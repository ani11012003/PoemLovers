import {useState} from "react";
import {useAuth} from "../store/auth";
import {toast} from "react-toastify";
const Contact=()=>{
    const {isLoggedIn}=useAuth();
    const [contact,setContact]= useState({
        username:"",
        email:"",
        message:"",
    });
    const [userData,setUserData]=useState(true);
    const {user}=useAuth();
    if(userData&&user){
          setContact({
            username:user.username,
            email:user.email,
            message:"",
          });
          setUserData(false);
    }
   
    //handling the input
    const handleInput=(e)=>{
        console.log(e);
        let name=e.target.name;
        let value=e.target.value;
 
        setContact({
         ...contact,
         [name]:value,
        });
     }
     //handling the submission of form
     const handleSubmit=async (e)=>{
         e.preventDefault();
         try {
            const response=await fetch(`http://localhost:5000/api/form/contact`,{
         method:"POST",
         headers:{
         'Content-Type': 'application/json',
         },
         body: JSON.stringify(contact)
        });
        if(response.ok){
            toast("form saved");
            setContact({username:"",
            email:"",
            message:"",});
        }
        else{
            toast("Error saving form");
        }
    }
        catch (error) {
            console.log(error);
        }
     }
    return (<>
<section>
        <main>
        <h1>Contact Us</h1>
            <div className="section-contact">
                <div className="container grid grid-two-cols">
                    <div className="contact-image">
                        <img src="" alt="fill the contact form" width="500px" height="500px"/>
                    </div>
                    <div className="contact-form">
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <br></br>
                                <label htmlFor="username">username</label>
                                <br></br>
                                <input type="text" name="username" placeholder="Username of User" value={contact.username} onChange={handleInput}
                                    id="username" required autoComplete="off"></input>
                            </div>
                            <div>
                            <br></br>
                                <label htmlFor="email">email</label>
                                <br></br>
                                <input type="email" name="email" placeholder="Email of user"  value={contact.email} onChange={handleInput} id="password" required autoComplete="off"></input>
                            </div>
                            <div>
                            <br></br>
                                <label htmlFor="message">message</label>
                                <br></br>
                                <textarea type="text" name="message"rows="6" placeholder="Enter the message" className="message" value={contact.message} onChange={handleInput} id="password" required autoComplete="off"></textarea>
                            </div>
                            <br/>
                                <button type="submit" className="btn btn-submit" disabled={!isLoggedIn}>Submit</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>);
}
export default Contact;