import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from './pages/homePage'
import Apropos from './pages/aPropos'
import Logement from './pages/Logement'
import Error from './pages/error'





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