import imgsrc from  '../../assets/BWlogo.png'
import '../../styles/re-use/Footer.scss'

function Footer () {


    return <div className="footer">
        <img src={imgsrc} alt="logo kasa" className='footer__img'></img>
        <p className='footer__txt'>© 2020 Kasa. All rights reserved</p>
    </div>
}

export default Footer