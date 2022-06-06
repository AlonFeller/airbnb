import { HomePage } from './pages/home-page.jsx'
import { ExplorePage } from './pages/explore-page.jsx'
// import { StayPage } from './pages/stay-page.jsx'
// import { UserBackOffice } from './pages/user-back-office.jsx'
import { BecomeAHost } from './pages/become-host.jsx'
// import { ReviewApp } from './pages/review-app.jsx'
// import { ChatApp } from './pages/chat-app.jsx'
// import { AdminApp } from './pages/admin-app.jsx'

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