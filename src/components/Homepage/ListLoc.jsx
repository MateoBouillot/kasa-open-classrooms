import '../../styles/Homepage/ListLoc.scss'
import data from '../../datas/logements.json'
import {Link, generatePath} from 'react-router-dom'


function ListLoc(props) {
    let Loc = data[props.i]
    
    function handleClick() {
        props.onIdChange(Loc.id)
    }

    return <Link to={generatePath('/:id', {id: Loc.id})} className='annonce' onClick={handleClick}>
        <img src={Loc.cover} alt='image annonce' className='annonce__img'></img>
        <p className='annonce__title'>{Loc.title}</p>
    </Link>
}


export default ListLoc