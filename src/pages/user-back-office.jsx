import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams } from 'react-router-dom'
import { loadUser } from '../store/user/user.actions'

export function UserBackOffice() {

    const params = useParams()
    const dispatch = useDispatch()
    const { watchedUser } = useSelector(storeState => storeState.stayModule)

    useEffect(() => {
        dispatch(loadUser(params.id))
        console.log(watchedUser)
    }, [params.id])

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
