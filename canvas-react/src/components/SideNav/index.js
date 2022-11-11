import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoUC from '../../assets/uclogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCalendar, faInbox, faQuestionCircle, faTachometerAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

const SideNav = () => (
    <div className='nav-bar'>
        <Link classname='logo' to='/'>
            <img src={LogoUC} alt='logo' />
        </Link>
        <nav className = 'topNav'>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faTachometerAlt} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='courses-link' to='/courses'>
                <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='calendar-link' to='/calendar'>
                <FontAwesomeIcon icon={faCalendar} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='groups-link' to='/groups'>
                <FontAwesomeIcon icon={faUsers} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='inbox-link' to='/inbox'>
                <FontAwesomeIcon icon={faInbox} color="#4d4d4e" />
            </NavLink> 
        </nav>
        <nav className='bottomNav'>
        <NavLink exact='true' activeclassname='active' className='account-link' to='/account'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='help-link' to='/help'>
                <FontAwesomeIcon icon={faQuestionCircle} color="#4d4d4e" />
            </NavLink>
        </nav>
    </div>
)

export default SideNav