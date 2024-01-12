import React from 'react'
import Header from '../components/Header'
import { BiLogoGithub, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoWhatsapp } from 'react-icons/bi'
import {BiEnvelope} from 'react-icons/bi'
import abi from '../assets/images/abi.png'


const About = () => {
  return (

    <div>
      <Header />
      <div className="about-flex">
        <div className="about-left">
          <h2 className="about-title">
            I’m Samuel Ojeyinka. I live in Osogbo Nigeria,Crafting Tomorrow's Code Today.
          </h2>
          <div className="about-text">
            <p>
              I’ve loved making things for as long as I can remember,
              and wrote my first program when I was 6 years old, just two
              weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.

              The only thing I loved more than computers as a kid was space. When I was 8,
              I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s
              motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough
              that with just a bit of momentum I’d be able to get to orbit.

              I spent the next few summers indoors working on a rocket design, while I recovered from
              the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but
              when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back
              down to our family computer from space.

              Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned
              shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.
            </p>
          </div>
        </div>
        <div className="about-right">
          <div className="image-box">
            <img src={abi}/>
          </div>
          <div className="social-box">
            <div className="social-icons">
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

            <div className="social-cmd">
              <h4>Follow on GitHub</h4>
              <h4>Follow on Twitter</h4>
              <h4>Follow on LinkedIn</h4>
              <h4>Chat on Whatsapp</h4>
            </div>
          </div>
          <div className="email-touch">
          <i className='et-icon'><BiEnvelope/></i>
          <h5>Samuelojeyinka@gmail.com</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About