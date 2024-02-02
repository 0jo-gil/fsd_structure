  import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootPage } from '@/pages/root';
import { ServiceOverviewPage } from '@/pages/service-overview';
import { ServiceCreatePage } from '@/pages/service-create/ index';

const router = createBrowserRouter([
    {
        element: <RootPage />,
        children: [
            {
                path: '/',
                element: <div>Home</div>
            },
            {
                path: '/services',
                element: <ServiceOverviewPage />
            },
            {
                path: '/services/create',
                element: <ServiceCreatePage />
            }
        ]
    }

])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
