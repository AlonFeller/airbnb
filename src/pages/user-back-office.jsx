import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams, Outlet } from 'react-router-dom'
import { loadUser } from '../store/user/user.actions'

export function UserBackOffice() {

    const params = useParams()
    const dispatch = useDispatch()
    const { user } = useSelector(storeState => storeState.userModule)

    useEffect(() => {
        dispatch(loadUser(params.id))
        console.log(user)
    }, [params.id])

    return (
        <>
            <section className="user-back-office">
                <div>
                    <h1>back office</h1>
                    <div className='backoffice-nav'>

                        <Link to='userbackoffice/orders'>Orders</Link>
                        <Link to='userbackoffice/stays'>My Stays</Link>
                        <Link to='userbackoffice/newstay'>Host your Place</Link>
                    </div>
                </div>

                
                <Outlet />


            </section>

        </>
    )
}
