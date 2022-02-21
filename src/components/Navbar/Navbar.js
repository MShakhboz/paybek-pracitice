import { Link } from 'react-router-dom';
import logo from './logo.png';
import './style.css';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar-pages' >
                <Link to = "/">
                    <div className='navbar-logo'>
                        <img className='logo' alt='logo' src={logo} />
                        <div className='name-box'>
                            <h4>Paybek Inc.</h4>
                            <p>New York, NY</p>
                        </div>    
                    </div>
                </Link>
       
                <div className='link'>
                    <Link to="/home">Home</Link>
                    <Link to="/users/push-notification/user-data-table">Users</Link>
                    <Link to="/txns">TXNS</Link>
                    <Link to="/pg">PG</Link>
                    <Link to="/account">ACCOUNT</Link>
                </div>
                <div className='admin'>
                    <div className='picture-icon'>
                        <img alt = "Admin\'s picture" src={logo} />
                    </div>
                    <p>Admin Partal</p>
                    <div>
                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.412893 2.38145L4.01989 5.98845C4.56303 6.53159 5.44041 6.53159 5.98354 5.98845L9.59054 2.38145C10.4679 1.50408 9.84122 0 8.60175 0H1.38776C0.148287 0 -0.464485 1.50408 0.412893 2.38145Z" fill="#969696"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4298 10.98C17.4698 10.66 17.4998 10.34 17.4998 10C17.4998 9.66 17.4698 9.34 17.4298 9.02L19.5398 7.37C19.7298 7.22 19.7798 6.95 19.6598 6.73L17.6598 3.27C17.5398 3.05 17.2698 2.97 17.0498 3.05L14.5598 4.05C14.0398 3.65 13.4798 3.32 12.8698 3.07L12.4898 0.42C12.4598 0.18 12.2498 0 11.9998 0H7.99984C7.74984 0 7.53984 0.18 7.50984 0.42L7.12984 3.07C6.51984 3.32 5.95984 3.66 5.43984 4.05L2.94984 3.05C2.71984 2.96 2.45984 3.05 2.33984 3.27L0.339839 6.73C0.209839 6.95 0.269839 7.22 0.459839 7.37L2.56984 9.02C2.52984 9.34 2.49984 9.67 2.49984 10C2.49984 10.33 2.52984 10.66 2.56984 10.98L0.459839 12.63C0.269839 12.78 0.219839 13.05 0.339839 13.27L2.33984 16.73C2.45984 16.95 2.72984 17.03 2.94984 16.95L5.43984 15.95C5.95984 16.35 6.51984 16.68 7.12984 16.93L7.50984 19.58C7.53984 19.82 7.74984 20 7.99984 20H11.9998C12.2498 20 12.4598 19.82 12.4898 19.58L12.8698 16.93C13.4798 16.68 14.0398 16.34 14.5598 15.95L17.0498 16.95C17.2798 17.04 17.5398 16.95 17.6598 16.73L19.6598 13.27C19.7798 13.05 19.7298 12.78 19.5398 12.63L17.4298 10.98ZM9.99984 13.5C8.06984 13.5 6.49984 11.93 6.49984 10C6.49984 8.07 8.06984 6.5 9.99984 6.5C11.9298 6.5 13.4998 8.07 13.4998 10C13.4998 11.93 11.9298 13.5 9.99984 13.5Z" fill="#969696"/>
                        </svg>
                    </div>
                    
                </div>
                
            </nav>
            
            
        </div>
    );
}

export default Navbar;