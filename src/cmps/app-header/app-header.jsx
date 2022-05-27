import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { NavBar } from './nav-bar-host'
import { Searchbar } from './searchbar'


export function AppHeader() {

    return (
        <>
            header
             
            <h1>logo</h1>

            <NavBar/>

            <Searchbar/>
        
        </>

     
    )
}
