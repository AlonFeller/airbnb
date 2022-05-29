import { HomePage } from './pages/home-page.jsx'
import { ExplorePage } from './pages/explore-page.jsx'
// import { StayPage } from './pages/stay-page.jsx'
import { BackOffice } from './pages/back-office.jsx'
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
    // {
    //     path: 'explore/:location',
    //     component: <ExplorePage />,
    //     label: 'explore'
    // },
    // {
    //     path: 'stay',
    //     component: <StayPage />,
    //     label: 'stay'
    // },
    {
        path: 'back-office',
        component: <BackOffice />,
        label: 'back-office'
    },
    // {
    //     path: 'about',
    //     component: <AboutUs />,
    //     label: 'About us'
    // },
    // {
    //     path: 'admin',
    //     component: <AdminApp />,
    //     label: 'Admin Only'
    // }
]

export default routes