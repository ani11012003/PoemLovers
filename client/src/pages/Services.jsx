import { useAuth } from "../store/auth";
const Services=()=>{
    const {services}=useAuth();
    const s=Object.values(services);
    return (<>
    <section className="section-services">
        <div className="container">
        <h1 className="main-heading">Services</h1>
        </div>
        <div className="container grid grid-three-cols">
       { 
        s.map((obj)=>{
            return (
                <>
            <div className="card" key={obj} >
           <div className="card-img">
            <img src="" alt="our services info" width="500"/>
           </div>
           <div className="card-details">
            <div className="grid grid-two-cols">
                <p >{obj.provider}</p>
                <p >{obj.price}</p>
            </div>
            <h2>{obj.service}</h2>
            <p >{obj.description}</p>
           </div>
            </div>
            </>);
        })
       }
        </div>
    </section>
    </>);
}
export default Services;