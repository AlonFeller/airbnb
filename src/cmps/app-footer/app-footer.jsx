import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


export function AppFooter() {

    return (
        <>
        <section className="footer-container flex space-between">
            <span>© 2022 Airbnb, Inc. · Privacy · Terms · Sitemap</span>
            <span>English  (US)   $ USD   Support & resources</span>
            </section>
        </>
    )
}
 