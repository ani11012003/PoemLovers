import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";
const Home=()=>{
    const {isLoggedIn}=useAuth();
    const {user}=useAuth();
    return (<>
     <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    {isLoggedIn?(
                     <>
                     <p className="UserName">Welcome {user.username}</p>
                     </>
                    ):
                    (
                        <>
                        <p className="UserName">Welcome username</p>
                        </>
                    )
                    }  
                    <h1>Hello World</h1>
                    <p>Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension. </p>
                    <div className="btn btn-group">
                        <a href="/contact" className="anchor-btn" ><button className="btn">Connect Now</button></a>
                        <a href="/services" className="anchor-btn"><button className="btn secondary-btn">Learn More</button></a>
                    </div>
                </div>
                <div className="hero-image">
                  <img src="#" alt="coding altogether" height="500px" width="400px" />
                </div>
            </div>
        </section>
     </main>
    { /*The second section*/}
    <section className="section-analytics">
        <div className="container grid grid-four-cols">
             <div className="Div1">
              <h2>50+</h2>
              <p>Registered Companies</p>
              </div>
              <div className="Div1">
             <h2>10000+</h2>
              <p>Happy Clients</p>
              </div>
              <div className="Div1">
             <h2>500+</h2>
              <p>Well Known Developers</p>
              </div>
              <div className="Div1">
             <h2>24/7</h2>
              <p>Available Services</p>
              </div>
        </div>
    </section>
    {/*third section alternate section */}
    <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
            <div className="hero-image">
                  <img src="#" alt="coding altogether" height="500px" width="400px" />
                </div>
                <div className="hero-content">
                    <p>Welcome to Technical</p>
                    <h1>Hello World</h1>
                    <p>Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension. </p>
                    <div className="btn btn-group">
                        <NavLink href="/contact" className="anchor-btn" ><button className="btn">Connect Now</button></NavLink>
                        <NavLink href="/services" className="anchor-btn"><button className="btn secondary-btn">Learn More</button></NavLink>
                    </div>
                </div>
            </div>
        </section>
     </main>
    </>);
}
export default Home;