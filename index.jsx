import { createRoot } from 'react-dom/client'
import App from './App'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import CountryDetail from './components/CountryDetail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/:country',
                element: <CountryDetail />
            }
        ]
    },

])

const root = createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)