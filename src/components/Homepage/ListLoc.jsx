import '../../styles/Homepage/ListLoc.scss'



function ListLoc({image, title}) {

    return <div className='annonce'>
        <img src={image} alt='image annonce' className='annonce__img'></img>
        <p className='annonce__title'>{title}</p>
    </div>
}


export default ListLoc