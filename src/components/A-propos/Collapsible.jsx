import '../../styles/A-propos/Collapsible.scss'
import {useState} from 'react'





function Collapsible(props) {
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open)
    }

    return <>
        <button type="button" className="collapsible" onClick={handleClick}>{props.title}</button>
        {open && <div className="content">
            <p className='content__animation'>{props.txt}</p>
        </div>}
    </>
}

export default Collapsible