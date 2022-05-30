import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


export function UserBackOffice() {

    return (
        <>
            <section className="user-back-office">
                <div>
                    <button className="my-trips">my-trips</button>
                    <button className="wishlist">wishlist</button>
                    <button className="hosting">hosting</button>
                </div>

                <h3>nav - my trips/stays stats</h3>

                <h3>graphs and statistics</h3>

                <h3>list of past rentals</h3>

                <h3>add stay</h3>

                <h1></h1>
            </section>

        </>
    )
}
