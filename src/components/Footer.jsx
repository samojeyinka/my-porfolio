import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
       <div className="footer-flex">
       <ul className="footer-links">
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/articles'}>Articles</Link>
                </li>
                <li>
                    <Link to={'/projects'}>Projects</Link>
                </li>
                <li>
                    <Link to={'/apis'}>APIs</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>

            <small>👩‍💻Samuel Ojeyinka</small>
            </div>
    </footer>
  )
}

export default Footer