import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";
const Home=()=>{
    const {isLoggedIn}=useAuth();
    const {user}=useAuth();
    document.title="PoemLovers";
    return (<>
     <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    {isLoggedIn?(
                     <>
                     <p className="UserName">Welcome {user.username} to PoemLovers</p>
                     </>
                    ):
                    (
                        <>
                        <p className="UserName">Welcome username to PoemLovers</p>
                        </>
                    )
                    }  
                    <p className="home-desc">Here every word paints emotions. Share your verses, explore, and discover the magic of words. Dive into a sea of emotions where every poem tells a story. Join a community of dreamers and storytellers. Let your poetry break silence and inspire. Every poem is a piece of someone heart. Explore human experiences through shared verses. From sonnets to haikus, this is where poetry finds its home. Embark on a poetic odyssey where every line is a revelation. Start your journey here, where poetry knows no bounds.</p>
                    <div className="btn btn-group">
                        <NavLink to="/contact" className="anchor-btn" ><button className="btn">Connect Now</button></NavLink>
                        <NavLink to="/services" className="anchor-btn"><button className="btn secondary-btn">Learn More</button></NavLink>
                    </div>
                </div>
                <div className="hero-image">
                  <img src="src\images\home.jpg" alt="coding altogether" height="500px" width="400px" />
                </div>
            </div>
        </section>
     </main>
   
    </>);
}
export default Home;