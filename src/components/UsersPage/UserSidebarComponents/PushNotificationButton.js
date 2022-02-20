import { Link } from 'react-router-dom';
import  { MdMessage } from 'react-icons/md';




const PushNotificationButton = () => {

    return (
        <Link to = "/users/push-notification/user-data-table">
            <div 
                className='side-bar-link-box' 
                id = { window.location.pathname === "/users/push-notification/user-data-table" 
                    ? "active-btn" 
                    : null } >
                <div className='svgIcon'>
                    <MdMessage />
                </div>
                <p className='side-bar-menue'>Push Notifications</p>
            </div>
        </Link>

    )
}


export default PushNotificationButton;