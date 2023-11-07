import ImgAccueil from '../../assets/image-banner-1.png'
import '../../styles/re-use/Banner.scss'
import ImgApropos from '../../assets/img-banner-apropos.png'
let ImgBanner = ''

function Banner(props) {

    if (props.src === 'Apropos') {
        ImgBanner = ImgApropos
    } else {
        ImgBanner = ImgAccueil
    }

    return <div className='banner'>
        <img src={ImgBanner} alt='photo bord de mer' className='banner__img'></img>
        <h1 className='banner__title'>{props.txt}</h1>
    </div>
}

export default Banner