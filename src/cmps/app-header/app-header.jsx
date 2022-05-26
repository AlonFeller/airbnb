import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Searchbar } from './searchbar'


export function AppHeader() {

    return (
        <>
            header
             
            <h1>logo</h1>

            <h1>navBar + become a host</h1>

            <Searchbar/>
        
        </>

     
    )
}
