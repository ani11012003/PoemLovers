import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
const AdminContacts=()=>{
    const [contacts,setContacts]=useState("");
    const {authToken,API} =useAuth();
    const deleteContact = async (_id)=>{
        try{
            const response =await fetch(`${API}/api/admin/contacts/delete/${_id}`,{
                method: "DELETE",
                headers:{
                    Authorization: authToken,
                }
            });
            const data=await response.json();
            setContacts(data);
            }
        catch(error){
            console.log(error);
        }
    }
    const getAllContacts = async ()=>{
        try {
          const response =await fetch(`${API}/api/admin/contacts`,{
              method: "GET",
              headers:{
                  Authorization: authToken,
              }
          },[]);
          const data=await response.json();
          setContacts(data);
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(()=>{
          getAllContacts();        
    },);
    return (
<>
<section className="admin-contacts-section">
    <div className="container">
       <h1>Admin Contacts Data</h1>
    </div>
    <div className="container admin-contacts">
    <table id="Contacts">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>message</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        { Object.values(contacts).map((contact,index)=>{ 
           return <tr key={index}>
                <td>{contact.username}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td><button onClick={()=>{
                    deleteContact(contact._id);
                }}>Delete</button></td>
            </tr>
        })}
        </tbody>
    </table>
    
    </div>

    </section>
</>
    );
}
export default AdminContacts;