import Header from '../re-use/HeaderNav.jsx'
import Footer from '../re-use/Footer.jsx'

function Annonce(props) {



    return <>
        <Header />
        <p>{props.id}</p>
        <Footer />
    </>
}


export default Annonce