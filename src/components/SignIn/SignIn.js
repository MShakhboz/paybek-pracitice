import { Link, Outlet } from 'react-router-dom';
import logo from './logo.png'
import './style.css';



const SignIn = () => {
    return (
        <div className='container'>
            <div >
                <nav className='navbar' >
                    <Link to = "/">
                        <div className='navbar-logo'>
                            <img className='logo' alt='logo' src={logo} />
                            <div className='name-box'>
                                <h4>Paybek Inc.</h4>
                                <p>New York, NY</p>
                            </div>    
                        </div>
                    </Link>
                    <div className='name-box'>
                        <p>Admin Partal</p>
                    </div>
                    
                </nav>
                <div className='content'>
                    <Outlet />
                </div>
 
            </div>
 
        </div>
    );

}

// function mapStatetoProps(state) {
//     return {
//         gmail: state.email,
//         pin: state.password,
//         tok: state.token
//     }
// }

// const mapDispatchToProps = {
//     SignInAction
// }

export default SignIn;