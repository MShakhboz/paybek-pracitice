import { Link } from 'react-router-dom';
import  { MdOutlineEventNote } from 'react-icons/md';

const EventButton = () => {
    return (
        <Link to = "events">
            <div className='side-bar-link-box'>
                <div className='svgIcon'>
                    <MdOutlineEventNote />
                </div>
                <p to = "" className='side-bar-menue'>Events</p>
            </div>
        </Link>

    )
}

export default EventButton;