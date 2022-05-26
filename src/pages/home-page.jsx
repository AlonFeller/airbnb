import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'
import hero from '../assets/Images/hero.png'

export function HomePage() {

    const navigate = useNavigate()
    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }



    return (
        <>
            <section className="home-page">
                <header> logo place holder
                    <button onClick={() => goTo('/explore')}>explore</button>
                    <button onClick={() => goTo('/stay')}>stay</button>
                </header>
                <img className="hero img" src={hero} alt="logo"></img>
                <span className="title">Not sure where to go ? Perfect.</span>
                <h1>

                    hi from homepage
                </h1>

                <h3>popular destinations list?</h3>
                <h3>top rated list?</h3>
                <h3>property type list?</h3>

                <h3>picture?</h3>


                <h1></h1>

            </section>



        </>
    )
}
