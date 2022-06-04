import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams, Outlet } from 'react-router-dom'
import { headerIsLong, toggleIsExplore, toggleIsHome } from "../store/header/header.action"
import { loadUser } from '../store/user/user.actions'
import { loadStays } from "../store/stay/stay.actions"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export function UserBackOffice() {

    const params = useParams()
    const dispatch = useDispatch()
    const { user } = useSelector(storeState => storeState.userModule)
    const [tab, setTab] = useState('stays');
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(loadStays())
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(loadUser(params.id))
        dispatch(toggleIsExplore(true))
        dispatch(headerIsLong(false))
        dispatch(toggleIsHome(false))
        console.log(user)
    }, [params.id, tab])

    const goTo = (path) => {
        navigate(path)
    }

    const handleChange = (event, newValue) => {
        setTab(newValue);
        goTo(newValue)
      };

    return (
        <>
            <section className="user-back-office">
                <div>
                    <h1>My Area</h1>
                    <div className='backoffice-nav'>

                        {/* <Link to='orders'>Orders</Link>
                        <Link to='stays'>My Stays</Link>
                        <Link to='newstay'>Host your Place</Link> */}

                        <Box sx={{ width: '100%' }}>
                            <Tabs
                                value={tab}
                                onChange={handleChange}
                                textColor="primary"
                                indicatorColor="primary"
                                aria-label="secondary tabs example"
                            >
                                <Tab tab="four" label="My Trips" value='mytrips' />
                                <Tab tab="one" label="Orders" value='orders'/>
                                <Tab tab="two" label="My stays" value='stays' />
                                <Tab tab="three" label="Add a property" value='newstay' />
                            </Tabs>
                        </Box>


                    </div>
                </div>


                <Outlet />


            </section>

        </>
    )
}
