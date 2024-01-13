import React from 'react'
import {FaGreaterThan} from 'react-icons/fa'


const Articles = () => {
  return (
    <div className='articles'>
      <h2>Writing on software design, company building, 
        and the aerospace industry.
        </h2>
        <p>All of my long-form thoughts on programming, leadership, product design, and more, collected in 
          chronological order.</p>

          <div className="articles-flex">
            <div className="article-box">
              <div className="article-date">
                <p>September 5, 2022</p>
              </div>
              <div className="article-content">
                <h4>Crafting a design system for 
                  a multiplanetary future
                  </h4>
                  <p>Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread
                     across our entire solar system.
                     </p>
                     
                     <button>Read article <FaGreaterThan/></button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Articles