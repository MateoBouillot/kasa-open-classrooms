import '../../styles/error/NoPage.scss'
import {Link} from 'react-router-dom'

function NoPage() {


    return <div className='error'>
        <h1 className='error__title'>404</h1>
        <p className='error__txt'>Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link to='/' className='error__link'>Retourner sur la page d&apos;accueil</Link>
    </div>
}

export default NoPage