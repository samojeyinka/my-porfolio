import React from 'react'
import { Link } from 'react-router-dom'
import {BiEnvelope, BiArrowFromTop, BiNetworkChart} from 'react-icons/bi'
import {BsBagDash, BsBag} from 'react-icons/bs'
import w2 from '../assets/images/w2.svg'
import pro1 from '../assets/images/pro1.jpeg'

const Main = () => {
  return (
    <section className="main">
        <div className="main-flex">
            <div className="left-side">
                <div className="projects">
                    <h3><BiNetworkChart/> My projects</h3>
                    <div className="project-flex">
                        <div className="project-box">
                            <div className="pj-img-box">
                                <img src={pro1}/>
                            </div>
                            <h4 className="pj-title">Introducing Animaginary: 
                            High performance web animations</h4>
                            <p className="pj-description">Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity
                             has spread across our entire solar system.</p>
                            <Link>View project</Link>
                        </div>
                        <div className="project-box">
                            <div className="pj-img-box">
                                <img src={pro1}/>
                            </div>
                            <h4 className="pj-title">Introducing Animaginary: 
                            High performance web animations</h4>
                            <p className="pj-description">Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity
                             has spread across our entire solar system.</p>
                            <Link>View project</Link>
                        </div>
                    </div>
                </div>
            </div>
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
                            <h3>Work</h3>
                        </div>
                        <div className="w-flex">
                            <div className="work-box">
                                <div className="wb-left">
                                    <div className="wb-left-img">
                                        <img src={w2}/>
                                        </div>
                                        <div className="wb-left-dt">
                                            <b>Planetaria</b>
                                            <br/>
                                            <small>Backend Developer</small>
                                       
                                    </div>
                                    </div>
                                    <div className="wb-right">
                                        <p>2019 — Present</p>
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