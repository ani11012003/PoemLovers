import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {Link} from "react-router-dom";
const AdminUsers=()=>{
    const [users,setUsers]=useState("");
    const {authToken,API} =useAuth();
    //delete the user
    const deleteUser=async (_id)=>{
        try{
        const response =await fetch(`${API}/api/admin/users/delete/${_id}`,{
            method: "DELETE",
            headers:{
                Authorization: authToken,
            }
        });
        const data=await response.json();
        setUsers(data);
        }
    catch(error){
        console.log(error);
    }
    }
    const getAllUsers =async ()=>{
      try {
        const response =await fetch(`${API}/api/admin/users`,{
            method: "GET",
            headers:{
                Authorization: authToken,
            }
        },[]);
        const data=await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
        getAllUsers();        
  },);
    return      <>
    <section className="admin-users-section">
    <div className="container">
       <h1>Admin Users Data</h1>
    </div>
    <div className="container admin-users">
    <table id="Users">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        { Object.values(users).map((user,index)=>{ 
           return <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td><Link to={`/admin/users/${user._id}/edit`}>Edit</Link></td>
                <td><button onClick={()=>{
                    deleteUser(user._id);
                }}>Delete</button></td>
            </tr>
        })}
        </tbody>
    </table>
    
    </div>

    </section>
        </>

}
export default AdminUsers;