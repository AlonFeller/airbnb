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
                <section className="main-body">
                    <section className="hero-container">
                        <img className="hero-img full" src={hero} alt="logo"></img>
                        <h1 className="title centered fs30">Not sure where to go ? Perfect.</h1>
                        <div className="button" onClick={() => goTo('/explore')}>I'm flexible</div>
                    </section>
                    <section className="destinations-container">
                        <h3>Popular Destinations</h3>
                        <section className="destinations-cards-container flex">
                            <div className="city-card">
                                <img src={nyc} className="square-ratio" alt="United states" onClick={() => goTo('/explore/?location=united states')}/>
                                <h4>United states</h4>
                            </div>
                            <div className="city-card">
                                <img src={madrid} className="square-ratio" alt="Spain" onClick={() => goTo('/explore/?location=Spain')} />
                                <h4>Spain</h4>
                            </div>
                            <div className="city-card">
                                <img src={tlv} className="square-ratio" alt="Israel" onClick={() => goTo('/explore/?location=Israel')} />
                                <h4>Israel</h4>
                            </div>
                            <div className="city-card">
                                <img src={paris} className="square-ratio" alt="France" onClick={() => goTo('/explore/?location=France')}/>
                                <h4>France</h4>
                            </div>
                            {/* <Leads/> */}
                        </section>
                    </section>

                </section>
            </section>



        </>
    )
}
