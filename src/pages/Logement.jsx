import Header from '../components/re-use/HeaderNav.jsx'
import Footer from '../components/re-use/Footer.jsx'
import Carousel from '../components/logement/Carousel.jsx'
import datas from '../datas/logements.json'
import UpperDesc from '../components/logement/UpperDesc.jsx'
import Collapse from '../components/logement/Collapse.jsx'
import { useParams } from 'react-router-dom'
import '../styles/logement/Logement.scss'
import { Navigate } from 'react-router-dom';

function Annonce() {
    const {id} = useParams()
    

    function idfind(data) {
        return data.id === id
    }
    let loc = datas.find(idfind)
    
    if (loc === undefined) {
        return <Navigate to='*' />
    }


    return <>
        <Header />
        <Carousel info={loc}/>
        <UpperDesc info={loc}/>
        <div className='collapsibles'> 
            <Collapse info={loc} type='Description' title='Description'/>
            <Collapse info={loc} type='Équipements' title='Équipements'/>
        </div>
        <Footer />
    </>
}


export default Annonce