import '../../styles/re-use/header.scss'
import logo from '../../assets/logobig.png'
import {Link} from 'react-router-dom'

function Header () {
    return <div className='header'>
        <img src={logo} alt='logo' className='header__logo'></img>
        <nav className='header__navbar'>
            <Link to='/' className='header__navbar__link'>Accueil</Link>
            <Link to='/A-propos' className='header__navbar__link'>A Propos</Link>
        </nav>
    </div>
}

export default Header