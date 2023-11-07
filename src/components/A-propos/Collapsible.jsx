import '../../styles/A-propos/Collapsible.scss'
import {useState} from 'react'





function Collapsible() {
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open)
    }

    return <div className="info">
        <button type="button" className="info__collapsible" onClick={handleClick}>Fiabilité</button>
        {open && <div className="info__content">
            <p className='info__content__animation'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </div>}
        <button type="button" className="info__collapsible" onClick={handleClick}>Respect</button>
        {open && <div className="info__content">
            <p className='info__content__animation'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>}
        <button type="button" className="info__collapsible" onClick={handleClick}>Service</button>
        {open && <div className="info__content">
            <p className='info__content__animation'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>}
        <button type="button" className="info__collapsible" onClick={handleClick}>Sécurité</button>
        {open && <div className="info__content">
            <p className='info__content__animation'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>}
    </div>
}

export default Collapsible