import { NavLink ,Outlet} from "react-router-dom";
import { useAuth } from "../../store/auth";
import { Navigate } from "react-router-dom";
const AdminLayout=()=>{
    const {user,isLoading}=useAuth();
    if(isLoading){
        return <h1>Loading...</h1>;
    }
    if(!user.isAdmin){
        return <Navigate to="/"/>
    }
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul className="Navbar-Admin">
                            <li><NavLink to="/admin/users">Users</NavLink></li>
                            <li><NavLink to="/admin/contacts">Contacts</NavLink></li>
                            <li><NavLink to="/admin/services">Services</NavLink></li>
                            <li><NavLink to="/">Home</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet/>
        </>
    );
}
export default AdminLayout;