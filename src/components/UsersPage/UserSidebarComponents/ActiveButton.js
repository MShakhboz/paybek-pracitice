import {Link} from 'react-router-dom';
import { MdPeopleAlt } from 'react-icons/md';


const ActiveButton = () => {
    return (
        <Link to = "active-users">
            <div className='side-bar-link-box'>
                <div className='svgIcon'>
                    <MdPeopleAlt />
                </div>
                <p className='side-bar-menue'>Active</p>    
            </div>
        </Link>

    )
}

export default ActiveButton;