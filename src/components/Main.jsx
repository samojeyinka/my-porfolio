import React from 'react'
import { Link } from 'react-router-dom'
import {BiEnvelope, BiArrowFromTop, BiNetworkChart} from 'react-icons/bi'
import {BsBagDash, BsBag} from 'react-icons/bs'
import w2 from '../assets/images/w2.svg'
import w1 from '../assets/images/w1.svg'
import pro1 from '../assets/images/pro1.jpeg'
import '../assets/stylesheets/main.css'
import Projects from './Projects'

const Main = () => {
  return (
    <section className="main">
        <div className="main-flex">
         <Projects/>
{/* The email and work side */}
            <div className="right-side">
                <div className="right-side-flex">
                    <div className="contact">
                        <div className="ct-top">
                            <i className='ct-icon'><BiEnvelope/></i>
                            <h3>Stay up to date</h3>
                        </div>
                        <p>Get notified when I publish something new, and unsubscribe at any time.</p>
                        <div className="email-actions">
                            <input type='email' placeholder='Email address'/>
                            <button type='submit'>Join</button>
                        </div>
                    </div>
                    <div className="work">
                    <div className="w-top">
                     <i className='w-icon'><BsBagDash/></i>
                            <h3>Experience</h3>
                        </div>
                        <div className="w-flex">
                            <div className="work-box">
                                <div className="wb-left">
                                    <div className="wb-left-img">
                                        <img src={w2}/>
                                        </div>
                                        <div className="wb-left-dt">
                                            <b>AirBNB</b>
                                            <br/>
                                            <small>Backend Developer</small>
                                       
                                    </div>
                                    </div>
                                    <div className="wb-right">
                                        <p>2019 — Present</p>
                                    </div>
                                
                            </div>
                            <div className="work-box">
                                <div className="wb-left">
                                    <div className="wb-left-img">
                                        <img src={w1}/>
                                        </div>
                                        <div className="wb-left-dt">
                                            <b>Planetaria</b>
                                            <br/>
                                            <small>Software Engineer</small>
                                       
                                    </div>
                                    </div>
                                    <div className="wb-right">
                                        <p>2017 — 2019</p>
                                    </div>
                                
                            </div>
                        </div>
                        <button className="cv-btn">Download CV <BiArrowFromTop/></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main