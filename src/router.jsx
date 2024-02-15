import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from './pages/HomePage'
import Apropos from './pages/APropos'
import Logement from './pages/Logement'
import Error from './pages/Error'

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
