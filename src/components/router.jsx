import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from './Homepage/homePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
        errorElement: <pageError />,
        children: [
            {
                path: 'A-propos',
                element: <a-Propos />
            }
        ]
    }
])

function Rout() {
    return <RouterProvider router={router} />
}

export default Rout