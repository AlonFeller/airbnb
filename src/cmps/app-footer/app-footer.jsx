import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


export function AppFooter() {
        const { isStay } = useSelector(state => state.headerModule.headerMode)
    return (
        <>
            <section className={"footer-container flex space-between " + (isStay ? "isStay" : "")}>
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
