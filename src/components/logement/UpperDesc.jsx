import '../../styles/logement/UpperDesc.scss'
import star from '../../assets/starActive.png'
import noStar from '../../assets/starInactive.png'
 

function UpperDesc(props) {
    let rating = []
    const dataRating = props.info.rating
    console.log(props.info)

    for (let i=0; i<5; i++) {
        i<dataRating  ? rating.push(1) : rating.push(0)
    }

    

    return <div className='desc'>
        <div className='titletags'>
            <h1 className='titletags__title'>{props.info.title}</h1>
            <h2 className='titletags__location'>{props.info.location}</h2>
            <div className='titletags__tags'>
                {props.info.tags.map((tag, index) => 
                <p key={tag.length * index} className='titletags__tags__tag'>{tag}</p>)}
            </div>
        </div>
        <div className='hostrating'>
            <div className='hostrating__host'>
                <h2 className='hostrating__host__name'>{props.info.host.name}</h2>
                <img src={props.info.host.picture} alt='photo vendeur' className='hostrating__host__img'></img>
            </div>
            <div className='rating'>
                {rating.map((rate, index) => 
                <img key={rate*2*index} src={rate === 1 ? star : noStar}></img>)}
            </div>
        </div>
    </div>
}

export default UpperDesc