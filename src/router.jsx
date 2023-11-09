import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from './pages/homePage'
import Apropos from './pages/aPropos'
import Annonce from './pages/Annonce'





function Rout() { 
    

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Homepage />,
            errorElement: <pageError />
        },
        {
            path: '/A-propos',
            element: <Apropos />
        },
        {
            path: `/annonce/:id`,
            element: <Annonce />    
        }


])

   
    return <RouterProvider router={router} />
}

export default Rout