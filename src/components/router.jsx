import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from './Homepage/homePage'
import Apropos from './A-propos/a-Propos'
import Annonce from './logement/Annonce'
import { useState } from "react"




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