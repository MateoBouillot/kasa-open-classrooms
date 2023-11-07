import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from './Homepage/homePage'
import Apropos from './A-propos/a-Propos'

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <pageError />,
        children: [
            {
                path: '/Homepage',
                element: <Homepage />
            },
            {
                path: '/A-propos',
                element: <Apropos />
            }
        ]
    }
])

function Rout() {
    return <RouterProvider router={router} />
}

export default Rout