import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/app-header/app-header'
import { AppFooter } from './cmps/app-footer/app-footer'
import { StayPage } from './pages/stay-page'

import './styles/styles.scss';

export class RootCmp extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="AppHeader">
                    <AppHeader />
                </div>
                <main>
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                        <Route path="stay/:id" element={<StayPage />} />
                    </Routes>
                </main>
                <div className="AppFooter">
                    <AppFooter />
                </div>

            </div>
        )
    }
}

