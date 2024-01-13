import React from 'react';
import Footer from '../components/Footer'
import ContactPart from '../components/Contact';
import Header from '../components/Header'

const Contact = () => {
  return (
    <section className="contact-page">
    <Header/>
      <ContactPart/>
      <Footer/>
    </section>
  )
}

export default Contact