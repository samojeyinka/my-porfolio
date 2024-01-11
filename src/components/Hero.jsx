import React from 'react'
import heroImg from '../assets/images/image1.jpeg'
import { BiLogoGithub, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoWhatsapp } from 'react-icons/bi'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-flex">
                <div className="hero-img">
                    <div className="heroImg-box">
                        <img src={heroImg} alt="My photo" className='hero_img' />
                    </div>
                </div>
                <div className="hero-title">
                    <h1>Full-Stack Developer, Ruby on rails, MERN STACK.</h1>
                </div>
                <div className="hero-intro">
                    <p>
                        I'm Samuel, a versatile full-stack developer
                        proficient in both frontend and backend technologies,
                        residing in Osogbo, Nigeria.
                        I specialize in crafting remarkable web technologies.
                        Let's collaborate and bring your ideas to life!</p>
                </div>
                <div className="hero-social-icons">
                    <div className="social-icons-flex">
                        <i className="s-icon">
                            <BiLogoGithub />
                        </i>
                        <i className="s-icon">
                            <BiLogoTwitter />
                        </i>
                        <i className="s-icon">
                            <BiLogoLinkedinSquare />
                        </i>
                        <i className="s-icon">
                            <BiLogoWhatsapp />
                        </i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero