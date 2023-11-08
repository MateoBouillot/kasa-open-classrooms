import Header from '../re-use/HeaderNav.jsx'
import Footer from '../re-use/Footer.jsx'
import Carousel from './Carousel.jsx'
import data from '../../datas/logements.json'

function Annonce(props) {

    function idfind(annonce) {
        return annonce.id === props.id
    }
    const loc = data.find(idfind)


    return <>
        <Header />
        <Carousel info={loc}/>
        <Footer />
    </>
}


export default Annonce