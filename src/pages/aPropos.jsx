import Header from '../components/re-use/HeaderNav.jsx'
import Banner from '../components/re-use/Banner.jsx'
import Footer from '../components/re-use/Footer.jsx'
import Collapse from '../components/logement/Collapse.jsx'
import '../styles/A-propos/a-propos.scss'

function Apropos() {
    return <>
        <Header />
        <Banner src='Apropos' txt='' />
        <div className='info'>
            <Collapse type='Description' title='Fiabilité' info='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'/>
            <Collapse type='Description' title='Respect' info='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>
            <Collapse type='Description' title='Service' info='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>
            <Collapse type='Description' title='Sécurité' info='La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'/>
        </div>
        <Footer />
    </>
}

export default Apropos