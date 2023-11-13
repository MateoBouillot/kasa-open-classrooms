import Header from '../components/re-use/HeaderNav.jsx'
import Banner from '../components/re-use/Banner.jsx'
import Footer from '../components/re-use/Footer.jsx'
import ListLoc from '../components/Homepage/ListLoc.jsx'
import '../styles/Homepage/Homepage.scss'
import data from '../datas/logements.json'
import { Link } from 'react-router-dom'

function Homepage() {

    let randomAnnonce = []

    for (let i=0; i<6; i++) {
        let min = Math.ceil(0)
        let max = Math.floor(19)
        randomAnnonce.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    return <>
        <Header />
        <Banner src='Accueil' txt='Chez vous, partout et ailleurs'/>
        <div className='table-annonce'>
            {randomAnnonce.map((i, index) =>
            <Link to={`annonce/${data[i].id}`} key={data[i].id + index} className='table-annonce__link'>
                <ListLoc image={data[i].cover} title={data[i].title}/>
            </Link>)}
        </div>
        <Footer />
    </>
}

export default Homepage