import '../../styles/A-propos/Collapsible.scss'
import {useState, useEffect, useRef} from 'react'
import arrow from '../../assets/Vector.png'





function Collapsible(title, txt) {
    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState(0)

    function handleClick() {
        setOpen(!open)
        
    }

    const ref = useRef(null)

    useEffect(() => {
        if(open) setHeight(ref.current?.getBoundingClientRect().height)
        else setHeight(0)
    }, [open])

    return <div className='collapsible'>
        <button type="button" className="collapsible__btn" >{title}</button>
        <img src={arrow} alt='fleche' className={open ? "collapsible__arrow--open" : 'collapsible__arrow'} onClick={handleClick}></img>
        <div className={open ? "collapsible__content--open" : "collapsible__content"} style={{height}}>
            <div ref={ref}>
                {open && <div>{txt}</div>}
            </div>
        </div>
    </div>
}

export default Collapsible