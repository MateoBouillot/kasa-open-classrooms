import '../../styles/logement/Carousel.scss'
import ArrowRight from '../../assets/arrowright.png'
import ArrowLeft from '../../assets/arrowleft.png'
import { useState } from 'react'


function Carousel(props) {

    let imgList = props.info.pictures
    const isCarousel = imgList.length > 1

    const [current, setCurrent] = useState(0)

    function nextSlide() {
        setCurrent(current === imgList.length - 1 ? 0 : current + 1)
    }

    function prevSlide() {
        setCurrent(current === 0 ? imgList.length - 1 : current - 1)
    }




    return <div className='carousel'>
        <img src={imgList[current]} alt='carousel img' className='carousel__img'></img>
        {isCarousel && <><img src={ArrowRight} alt='flèche droite' className='carousel__right' onClick={nextSlide}></img>
        <img src={ArrowLeft} alt='flèche gauche' className='carousel__left' onClick={prevSlide}></img>
        <p className='carousel__counter'>{current + 1}/{imgList.length}</p></>}
    </div>
}


export default Carousel