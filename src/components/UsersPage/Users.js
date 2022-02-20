import ActiveButton from './UserSidebarComponents/ActiveButton';
import InactiveButton from './UserSidebarComponents/InactiveButton';
import PushNotificationButton from './UserSidebarComponents/PushNotificationButton';
import BlockButton from './UserSidebarComponents/BlockButton';
import EventButton from './UserSidebarComponents/EventButton';
import './style.css';
import { Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <div className='users-container'>
            <div className='side-bar-container'>
                <ActiveButton />
                <InactiveButton />
                <PushNotificationButton />
                <BlockButton />
                <EventButton />
            </div>    
            {/* <UserPushNotification /> */}
            {/* <button onClick = {getDataFromStore}> Get info </button> */}
            <Outlet />
        </div>
    )
}

export default Users;