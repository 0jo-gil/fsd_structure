import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootPage } from '@/pages/root';
import { ServiceOverviewPage } from '@/pages/service-overview';
import { ServiceCreatePage } from '@/pages/service-create/ index';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/lib/react-query';

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
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}

export default App
