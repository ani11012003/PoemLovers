import {useState} from "react";
import {useAuth} from "../store/auth";
import {toast} from "react-toastify";
const Poem=()=>{
    const {isLoggedIn}=useAuth();
    const [poem,setPoem]= useState({
        title:"",
        author:"",
        content:"",
    });
    const {authToken,API}=useAuth();
     //handling the input
    const handleInput=(e)=>{
        console.log(e);
        let name=e.target.name;
        let value=e.target.value;
 
        setPoem({
         ...poem,
         [name]:value,
        });
     }
      //handling the submission of form
      const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
           const response=await fetch(`${API}/api/poems/poem`,{
        method:"POST",
        headers:{
        'Content-Type': 'application/json',
        'Authorization': authToken,
        },
        body: JSON.stringify(poem)
       });
       if(response.ok){
        toast("poem saved");
        setPoem({title:"",
        author:"",
        content:"",});
       }
    else{
        toast("Error saving Poem");
    }
}

catch (error) {
    console.log(error);
}}
    return (
        <>
            <section>
        <main>
        <h1>Write your Poem </h1>
            <div className="section-contact">
                <div className="container grid grid-two-cols">
                    <div className="contact-image">
                        <img src="src/images/poem.jpg" alt="fill the contact form" width="400px" height="400px"/>
                    </div>
                    <div className="contact-form">
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <br></br>
                                <label htmlFor="title">Title</label>
                                <br></br>
                                <input type="text" name="title" placeholder="Title of Poem" value={poem.title} onChange={handleInput}
                                    id="title" required autoComplete="off"></input>
                            </div>
                            <div>
                            <br></br>
                                <label htmlFor="author">Author</label>
                                <br></br>
                                <input type="text" name="author" placeholder="Author of Poem"  value={poem.author} onChange={handleInput} id="author" required autoComplete="off"></input>
                            </div>
                            <div>
                            <br></br>
                                <label htmlFor="content">Write the Poem</label>
                                <br></br>
                                <textarea type="text" name="content"rows="6" placeholder="Write your Poem here" className="content" value={poem.content} onChange={handleInput} id="content" required autoComplete="off"></textarea>
                            </div>
                            <br/>
                                <button type="submit" className="btn btn-submit" disabled={!isLoggedIn}>Submit</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </main>
    </section>
        </>
    );
}
export default Poem;