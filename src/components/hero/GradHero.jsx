import React from 'react'

import heroImage from '../../img/hero-girl.png';
import vector1 from '../../img/SVG/Vector.svg';
import vector2 from '../../img/SVG/tag.svg';
import vector3 from '../../img/SVG/colorfilter.svg';
import vector4 from '../../img/SVG/grad.svg';



const GradHero = () => {
  return (
    <section className='section-hero hero graduate__hero'>
      {/* <img src={vector4} alt="vector" className='back'/> */}
      <Info />
      <Image/>
    </section>
   
  )
}

const Info = () => {

  return (
    <div className="hero_info">
      <h1 className='heading-primary'>
        meet our newly cohort graduates,
      </h1>

      <p className="hero_text">
        Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
        At faucibus aliquam facilisi mi consequat consectetur lobortis massa
      </p>
    </div>

  )
}


const Image = () => {

  return (
    <div className="hero_img-box">
      
      <div className="img-backdrop img-backdrop--main"></div>
      <div className="hero-img hero-img__graduate">
        <img src={heroImage} alt={heroImage} />
      </div>
      <div className="article article_box-1">
        <div className="article_vector1">
          <img src={vector1} alt="vector1" />
        </div>
        <span>excellent dev & designers</span>

        <div className="article_vector2">
           <img src={vector2} alt="" />
        </div>
      </div>

      <div className="article article_box-2">
        <div className="article_vector1">
          <img src={vector3} alt="vector1" />
        </div>
        <span>professionals</span>

        <div className="article_vector2">
           <img src={vector2} alt="" />
        </div>
      </div>
      

  </div>
  )
}

export default GradHero


