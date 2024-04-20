import { useAuth } from "../store/auth";
const Services=()=>{
    const {services}=useAuth();
    const s=Object.values(services);
    return (<>
    <section className="section-services">
        <div className="container">
        <h1 className="main-heading">Poems</h1>
        </div>
        <div className="container grid grid-three-cols">
       { 
        s.map((obj)=>{
            return (
                <>
            <div className="card" key={obj} >
           <div className="card-details">
            <h2>{obj.title}</h2>
            <pre>{ obj.content }</pre>
            <h2>{obj.author}</h2>
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