import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { headerIsLong, toggleIsExplore, toggleIsHome, toggleIsStay } from "../store/header/header.action";
import { useDispatch } from 'react-redux'

export function HomePage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(toggleIsStay(false))
        dispatch(toggleIsExplore(false))
        dispatch(headerIsLong(true))
        dispatch(toggleIsHome(true))
        console.log(new Date(1654264978351).toDateString())
        return () => {
            dispatch(headerIsLong(false))
            dispatch(toggleIsHome(false))
        }
    }, []);

    return (
        <>
            <section className="home-page .main-container">
                <section className="main-body">
                    <section className="hero-container">
                        <img className="hero-img full" src='https://res.cloudinary.com/airzula/image/upload/airzula/hero.png' alt="logo"></img>
                        <h1 className="title centered fs30">Not sure where to go ? Perfect.</h1>
                        <div className="button" onClick={() => goTo('/explore')}><span>I'm flexible</span></div>
                    </section>
                    <section className="destinations-container">
                        <h3>Popular Destinations</h3>
                        <section className="destinations-cards-container flex">
                            <div className="city-card">
                                <div className="img-container"><img src='https://res.cloudinary.com/airzula/image/upload/airzula/NYC.jpg' className="square-ratio" alt="United states" onClick={() => goTo('/explore/?location=united states')} /></div>
                                <h4>United states</h4>
                            </div>
                            <div className="city-card">
                                <div className="img-container"><img src='https://res.cloudinary.com/airzula/image/upload/airzula/madrid.jpg' className="square-ratio" alt="Spain" onClick={() => goTo('/explore/?location=Spain')} /></div>
                                <h4>Spain</h4>
                            </div>
                            <div className="city-card">
                                <div className="img-container"><img src='https://res.cloudinary.com/airzula/image/upload/airzula/portugal.jpg' className="square-ratio" alt="Portugal" onClick={() => goTo('/explore/?location=Portugal')} /></div>
                                <h4>Portugal</h4>
                            </div>
                            <div className="city-card">
                                <div className="img-container"><img src='https://res.cloudinary.com/airzula/image/upload/airzula/brazil.jpg' className="square-ratio" alt="Brazil" onClick={() => goTo('/explore/?location=Brazil')} /></div>
                                <h4>Brazil</h4>
                            </div>
                            {/* <Leads/> */}
                        </section>
                    </section>
                    <section className='home-become-host'>
                        <img className="host-hero-img full" src='https://res.cloudinary.com/airzula/image/upload/airzula2/host-hero.jpg' alt="host-hero-img "></img>
                        <div className="text-btn-container">
                            <h1 className="title centered fs30">Become a host</h1>
                            <div className="button" onClick={() => goTo('/host')}><span>Learn more</span></div>
                        </div>
                    </section>
                </section>
            </section>



        </>
    )
}
