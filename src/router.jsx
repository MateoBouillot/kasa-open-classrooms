import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from './pages/HomePage.jsx'
import Apropos from './pages/APropos.jsx'
import Logement from './pages/Logement.jsx'
import Error from './pages/Error.jsx'

function Rout() { 
    

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Homepage /> 
        },
        {
            path: '/A-propos',
            element: <Apropos />
        },
        {
            path: `/annonce/:id`,
            element: <Logement />    
        },
        {
            path: '*',
            element: <Error />
        }


])

   
    return <RouterProvider router={router} />
}

export default Rout
