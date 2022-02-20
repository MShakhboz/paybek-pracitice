import { Link, Outlet } from 'react-router-dom';
import '../../style.css';



function UserPushNotification() {
    return (
        <div className='sub-users-container'>
            <div className='head-line'>
                <h4>Users, Push Notifications</h4>
            </div>
            <div className='form-container'>
                <nav className='form-navbar' >
                    <div>
                        <Link to = "user-form">
                            <span className='form-navbar-menu'>Send</span>
                        </Link>
                    </div>
                    <div>
                        <Link to = "user-data-table" ><span className='form-navbar-menu' style = {window.location.pathname === "/users/push-notification/user-data-table" ? {color: "#0085FF", borderBottom: "1px solid #0085FF"} : null}>History</span></Link>
                    </div>
                    
                </nav>
                <div className="user-form" style = {null}>
                    {/* ---------------- adding form ------------------ */}
                    <Outlet />
                </div>
            </div>
            {/* <button onClick={pathName}>Click Me</button> */}
        </div>
    )
}


export default UserPushNotification; 