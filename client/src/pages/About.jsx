import { NavLink } from "react-router-dom";
const About=()=>{
    return (
        <>
             <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p className="home-desc">Welcome to PoemLovers, a vibrant online community dedicated to celebrating the beauty of poetry and the power of words. Our journey began with a shared passion for literature and a desire to create a space where poets of all backgrounds could come together to share their voices and experiences. Inspired by the profound impact of poetry on our lives, we set out to build a platform that fosters creativity, connection, and collaboration among poetry enthusiasts worldwide.</p>
                    <p className="home-desc">At the heart of our platform is a belief in the transformative power of poetry to inspire, uplift, and unite. Whether you're a seasoned poet or someone who's just beginning to explore the world of verse, PoemLovers welcomes you with open arms. Here, you'll find a diverse collection of poems that span genres, styles, and perspectives, each offering a unique glimpse into the human experience. We believe that every poem has the potential to spark a conversation, ignite the imagination, and touch the hearts of readers across the globe.</p>
                    <div className="btn btn-group">
                        <NavLink to="/contact" className="anchor-btn" ><button className="btn">Connect Now</button></NavLink>
                        <NavLink to="/services" className="anchor-btn"><button className="btn secondary-btn">Learn More</button></NavLink>
                    </div>
                </div>
                <div className="hero-image">
                  <img src="src\images\about.jpeg" alt="coding altogether" height="400px" width="400px" />
                </div>
            </div>
        </section>
     </main>
        </>
    );

}
export default About;