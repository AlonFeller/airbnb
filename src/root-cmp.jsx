import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/app-header/app-header'
import { AppFooter } from './cmps/app-footer/app-footer'
import { StayPage } from './pages/stay-page'
import { ExplorePage } from './pages/explore-page'
import { UserBackOffice } from './pages/user-back-office.jsx'

import './styles/styles.scss';
import { NewStayHost } from './cmps/user-back-office/new-stay'
import { MyStays } from './cmps/user-back-office/my-stays'
import { MyOrders } from './cmps/user-back-office/my-orders'
import { MyTrips } from './cmps/user-back-office/my-trips'

export class RootCmp extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="AppHeader">
                    <AppHeader />
                </div>
                <main>
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={(route.label === 'exploreLocation')?
                         false : true} element={route.component} path={route.path} />)}
                        <Route path="stay/:id" element={<StayPage />} />
                        <Route path="userbackoffice/" element={<UserBackOffice />}>
                                <Route path="orders" element={<MyOrders />} />
                                <Route path="stays" element={<MyStays />} />
                                <Route path="newstay" element={<NewStayHost />} />
                                <Route path="myTrips" element={<MyTrips />} />
                        </Route>
                    </Routes>
                </main>
                <div className="AppFooter">
                    <AppFooter />
                </div>

            </div>
        )
    }
}

