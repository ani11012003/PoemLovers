import { NavLink } from "react-router-dom";

const Error=()=>{
    return(
        <>
         <section id="error-page">
         <div className="error-content">
            <h1 className="header">404</h1>
            <h2>Sorry! Page not Found</h2>
            <p> Oops! It feels like the page you are trying to access is not available. If you believe it is an issue feel free to report it. </p>
            <div className="btns">
                   <NavLink to="/"> <button>Return Home </button></NavLink> 
                    <NavLink to="/contact"><button>Report Problem</button></NavLink>
            </div>
         </div>
         </section>
        </>
    );
}
export default Error;