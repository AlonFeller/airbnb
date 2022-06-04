import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


export function AppFooter() {

    return (
        <>
            <section className="footer-container flex space-between">
                <span className="left-side-footer">
                    <span>© 2022 Airbnb, Inc.</span>
                    <span className="footer-dot">·</span>
                    <span>Privacy</span>
                    <span className="footer-dot">·</span>
                    <span>Terms</span>
                    <span className="footer-dot">·</span>
                    <span>Sitemap</span>
                </span>
                <span className="right-side-footer">
                    <span>English</span>
                    <span>(US)</span>
                    <span>$ USD</span>
                    <span>Support & resources</span>
                </span>
            </section>
        </>
    )
}
