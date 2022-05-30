import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams } from 'react-router-dom'
import { loadUser } from '../store/user/user.actions'
import { Hosting } from '../cmps/user-back-office/hosting'
import { Wishlist } from '../cmps/user-back-office/wishlist'
import { MyTrips } from '../cmps/user-back-office/my-trips'

export function UserBackOffice() {

    const params = useParams()
    const dispatch = useDispatch()
    const { watchedUser } = useSelector(storeState => storeState.userModule)

    useEffect(() => {
        dispatch(loadUser(params.id))
        console.log(watchedUser)
    }, [params.id])

    return (
        <>
            {watchedUser && <section className="user-back-office">
                <div>
                    <button className="my-trips-btn">my-trips</button>
                    <button className="wishlist-btn">wishlist</button>
                    <button className="hosting-btn">hosting</button>
                </div>

                <Hosting key="hosting" user={watchedUser} />
                <Wishlist key="wishlist" user={watchedUser} />
                <MyTrips key="my-trips" user={watchedUser} />

            </section>}

        </>
    )
}
