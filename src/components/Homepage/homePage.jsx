import Header from '../re-use/HeaderNav.jsx'
import Banner from '../re-use/Banner.jsx'
import Footer from '../re-use/Footer.jsx'

function Homepage() {
    return <>
        <Header />
        <Banner src='Accueil' txt='Chez vous, partout et ailleurs'/>
        <Footer />
    </>
}

export default Homepage