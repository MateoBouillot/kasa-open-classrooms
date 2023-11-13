import '../../styles/logement/CollapseDesc.scss'
import {useState, useEffect, useRef} from 'react'
import arrow from '../../assets/Vector.png'

function CollapseDesc({info, type}) {
    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState(0)
    let description = []
    description.push(info.description)
    const equipments = info.equipments

    const content = type === 'Description' ? description : equipments
 
    function handleClick() {
        setOpen(!open)
    }

    const ref = useRef(null)

    useEffect(() => {
        if(open) setHeight(ref.current?.getBoundingClientRect().height)
        else setHeight(0)
    }, [open])
      
console.log(content)
    return <div className='collapse'>
        <button type='button' className='collapse__btn'>{type}</button>
        <img src={arrow} alt='fleche' className={open ? 'collapse__arrow--open' : 'collapse__arrow'} onClick={handleClick}></img>
        <div className={open ? 'collapse__content--open' : 'collapse__content'} style={{height}}>
            <div ref={ref}>
                {open && (<div>
                    {content.map((desc, index) => <div key={desc.length^2*index}>{desc}</div>)}
                </div>)}
            </div>
        </div>
    </div>
}


export default CollapseDesc