import Header from '../re-use/HeaderNav.jsx'
import Banner from '../re-use/Banner.jsx'
import Footer from '../re-use/Footer.jsx'
import ListLoc from '../Homepage/ListLoc.jsx'
import '../../styles/Homepage/Homepage.scss'

function Homepage(props) {
    return <>
        <Header />
        <Banner src='Accueil' txt='Chez vous, partout et ailleurs'/>
        <div className='table-annonce'>
            <ListLoc i='0' onIdChange={props.onIdChange}/>
            <ListLoc i='1' onIdChange={props.onIdChange}/>
            <ListLoc i='2' onIdChange={props.onIdChange}/>
            <ListLoc i='3' onIdChange={props.onIdChange}/>
            <ListLoc i='4' onIdChange={props.onIdChange}/>
            <ListLoc i='5' onIdChange={props.onIdChange}/>
        </div>
        <Footer />
    </>
}

export default Homepage