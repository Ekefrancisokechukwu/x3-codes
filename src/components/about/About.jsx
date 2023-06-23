import React, { useState } from 'react';
import { aboutData } from './aboutData';

// icons 
import vector1 from '../../img/SVG/Group 77.svg';
import vector2 from '../../img/SVG/Group 78.svg';
import vector3 from '../../img/SVG/Group 79.svg';


const About = () => {
  
  return (
    <section className='section-about about'>
      <AboutHeading />
    </section>
  )
}


const AboutHeading = () => {
  const [devs, setDevs] = useState(aboutData);
  
  return (
    <React.Fragment>
      <div className="about_head">
      <h1 className='heading-primary'>who we <span>are?</span></h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
        At faucibus aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus
        sed eget velit malesuada 
      </p>
    </div>
    
      <div className="about_article-container">

        <article className="about_article">
          <img src={vector1} alt="" />
          <h5 className='heading-tertiary'>Experienced Devs</h5>
          <p>Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus
            aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada
          </p>
        </article>

        <article className="about_article">
          <img src={vector2} alt="" />
          <h5 className='heading-tertiary'>Experienced Devs</h5>
          <p>Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus
            aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada
          </p>
        </article>

        <article className="about_article">
          <img src={vector3} alt="" />
          <h5 className='heading-tertiary'>Experienced Devs</h5>
          <p>Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus
            aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada
          </p>
        </article>
      </div>
      
    </React.Fragment>

    
  )
}

export default About
