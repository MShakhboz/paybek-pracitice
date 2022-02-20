import { Link } from 'react-router-dom';
import { IoPeopleCircle } from 'react-icons/io5';

const InactiveButton = () => {
    return (
        <Link to = "inactive-users">
            <div className='side-bar-link-box'>
                <div className='svgIcon'>
                    <IoPeopleCircle />
                </div>
                <p to = "" className='side-bar-menue'>Inactive</p>
            </div>
        </Link>
        
    )
}

export default InactiveButton;