import Header from '../components/re-use/HeaderNav.jsx'
import Footer from '../components/re-use/Footer.jsx'
import Carousel from '../components/logement/Carousel.jsx'
import datas from '../datas/logements.json'
import UpperDesc from '../components/logement/UpperDesc.jsx'
import { useParams } from 'react-router-dom'

function Annonce() {
    const {id} = useParams()
    

    function idfind(data) {
        console.log(data)
        return data.id === id
    }
    let loc = datas.find(idfind)
    console.log(id)
    return <>
        <Header />
        <Carousel info={loc}/>
        <UpperDesc info={loc}/> 
        <Footer />
    </>
}


export default Annonce