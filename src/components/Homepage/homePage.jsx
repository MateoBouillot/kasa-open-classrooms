import Header from '../re-use/HeaderNav.jsx'
import Banner from '../re-use/Banner.jsx'
import Footer from '../re-use/Footer.jsx'
import ListLoc from '../Homepage/ListLoc.jsx'
import '../../styles/Homepage/Homepage.scss'

function Homepage(props) {

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
            <ListLoc i={randomAnnonce[0]} onIdChange={props.onIdChange}/>
            <ListLoc i={randomAnnonce[1]} onIdChange={props.onIdChange}/>
            <ListLoc i={randomAnnonce[2]} onIdChange={props.onIdChange}/>
            <ListLoc i={randomAnnonce[3]} onIdChange={props.onIdChange}/>
            <ListLoc i={randomAnnonce[4]} onIdChange={props.onIdChange}/>
            <ListLoc i={randomAnnonce[5]} onIdChange={props.onIdChange}/>
        </div>
        <Footer />
    </>
}

export default Homepage