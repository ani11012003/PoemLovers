import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const AdminUpdate=()=>{
    const {authToken,API} =useAuth();

    const [data,setData]=useState({
        username:"",
        email:"",
        phone:"",
    });
    const params=useParams();
    // get data of the single user
    const getSingleUserData=async ()=>{
        try{
        const response =await fetch(`${API}/api/admin/users/${params.id}`,{
            method: "GET",
            headers:{
                Authorization: authToken,
            }
        });
        const data=await response.json();
        setData(data);
        }
    catch(error){
        console.log(error);
    }
    }
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
 
        setData({
         ...data,
         [name]:value,
        });
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try {
            const response =await fetch(`${API}/api/admin/users/update/${params.id}`,{
            method: "PATCH",
            headers:{
                'Content-type': 'application/json',
                Authorization: authToken,
            },
            body:JSON.stringify(data)
        });
        if(response.ok){
            toast.success("User data updated successfully");
        }
        else{
            toast("Error updating user data");
        }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
           getSingleUserData();
    },[]);
           return (
            <>
                <section>
        <main>
        <h1>Update User Data</h1>
            <div className="section-contact">
                <div className="container grid grid-two-cols">
                    <div className="contact-image">
                        <img src="" alt="update the user data" width="500px" height="500px"/>
                    </div>
                    <div className="contact-form">
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <br></br>
                                <label htmlFor="username">username</label>
                                <br></br>
                                <input type="text" name="username" placeholder="Username of User" value={data.username} onChange={handleInput}
                                    id="username" required autoComplete="off"></input>
                            </div>
                            <div>
                            <br></br>
                                <label htmlFor="email">email</label>
                                <br></br>
                                <input type="email" name="email" placeholder="Email of user"  value={data.email} onChange={handleInput} id="email" required autoComplete="off"></input>
                            </div>
                            <div>
                            <br></br>
                                <label htmlFor="phone">Mobile</label>
                                <br></br>
                                <input type="phone" name="phone" placeholder="Mobile Number of user"  value={data.phone} onChange={handleInput} id="phone" required autoComplete="off"></input>
                            </div>
                            <br/>
                                <button type="submit" className="btn btn-submit" >Update</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </main>
    </section>
            </>
           );

}
export default AdminUpdate;