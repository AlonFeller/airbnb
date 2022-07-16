import { HomePage } from './pages/home-page.jsx'
import { ExplorePage } from './pages/explore-page.jsx'
import { BecomeAHost } from './pages/become-host.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home 🏠',
    },
    {
        path: '/explore',
        component: <ExplorePage />,
        label: 'explore'
    },
    {
        path: '/host',
        component: <BecomeAHost />,
        label: 'host'
    }
]

export default routes