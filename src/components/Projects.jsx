import React from 'react'
import {BiEnvelope, BiArrowFromTop, BiNetworkChart} from 'react-icons/bi'
import pro1 from '../assets/images/pro1.jpeg'
import { Link } from 'react-router-dom'
import '../assets/stylesheets/main.css'


const Projects = () => {
  return (
    <>
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
    </>
  )
}

export default Projects