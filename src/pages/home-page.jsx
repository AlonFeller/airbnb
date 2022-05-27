import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'
import hero from '../assets/Images/hero.png'
import nyc from '../assets/Images/NYC.jpg'
import madrid from '../assets/Images/madrid.jpg'
import tlv from '../assets/Images/TLV.jpg'
import paris from '../assets/Images/paris.jpg'

import { Leads } from '../cmps/home-page/leads'

export function HomePage() {

    const navigate = useNavigate()
    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }



    return (
        <>
            <section className="home-page .main-container">
                <header>
                    logo place holder
                    <button onClick={() => goTo('/explore')}>explore</button>
                </header>
                <img className="hero img" src={hero} alt="logo"></img>
                <span className="title">Not sure where to go ? Perfect.</span>

                <section className="destinations container">
                    <h3>popular destinations list?</h3>
                    <section className="destiunations cards container flex">
                        <div className="city continer ">
                            <img src={nyc} className="square-ratio" alt="NYC" />
                            <h4>New York City</h4>
                        </div>
                        <div className="city continer">
                            <img src={madrid} className="square-ratio" alt="Madrid" />
                            <h4>Madrid</h4>
                        </div>
                        <div className="city continer">
                            <img src={tlv} className="square-ratio" alt="Tel Aviv" />
                            <h4>Tel Aviv</h4>
                        </div>
                        <div className="city continer">
                            <img src={paris} className="square-ratio" alt="Paris" />
                            <h4>Paris</h4>
                        </div>
                        {/* <Leads/> */}
                    </section>
                </section>
                <h3>top rated list?</h3>
                <h3>property type list?</h3>

                <h3>picture?</h3>

            </section>



        </>
    )
}
