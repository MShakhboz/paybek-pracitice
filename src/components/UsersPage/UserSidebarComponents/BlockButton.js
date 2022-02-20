import { Link } from 'react-router-dom';
import { BiShieldQuarter } from 'react-icons/bi'

const BlockButton = () => {
    return (
        <Link to = "blocked-users">
            <div className='side-bar-link-box'>
                <div className='svgIcon'>
                    <BiShieldQuarter />
                </div>
                <p className='side-bar-menue'>Blocked</p>
            </div>
        </Link>

    )
}

export default BlockButton;