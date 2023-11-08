import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from './Homepage/homePage'
import Apropos from './A-propos/a-Propos'
import data from '../datas/logements.json'
import Annonce from './logement/Annonce'
import { useState } from "react"
let randomAnnonce = []

for (let i=0; i<6; i++) {
    let min = Math.ceil(0)
    let max = Math.floor(19)
    randomAnnonce.push(Math.floor(Math.random() * (max - min + 1) + min))
}
console.log(data[1].id)


function Rout() { 
    const [id, setId] = useState('')

    function handleClickId(newId) {
        setId(newId)
    }

    const router = createBrowserRouter([
        {
            path: '/Homepage',
            element: <Homepage onIdChange={handleClickId}/>,
            errorElement: <pageError />
        },
        {
            path: '/A-propos',
            element: <Apropos />
        },
        {
            path: `/:id`,
            element: <Annonce id={id}/>    
        }


])

   
    return <RouterProvider router={router} />
}

export default Rout