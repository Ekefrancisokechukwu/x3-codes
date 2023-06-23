import React from 'react'
import heroImage from '../../img/home.png';
import vector1 from '../../img/SVG/Vector.svg';
import vector2 from '../../img/SVG/tag.svg';
import vector3 from '../../img/SVG/colorfilter.svg';


const Hero = () => {
  return (
    <section className='section-hero hero'>
      <Info />
      <Image/>
    </section>
  )
}

const Info = () => {

  return (
    <div className="hero_info">
      <h5>welcome to x3codes</h5>
      <h1 className='heading-primary'>
        looking to <span>pursue</span>  a new career in <span>tech?</span>
      </h1>

      <p className="hero_text">
        Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
        At faucibus aliquam facilisi mi consequat consectetur lobortis massa
      </p>

      <div className="hero_btn-container">
          <a href="#">
        <button className='btn btn--main'>
            apply now!
        </button>
          </a>

        <button className='btn btn--sub'>
          <a href="#">
            learn more
          </a>
        </button>
      </div>
    </div>

  )
}


const Image = () => {

  return (
    <div className="hero_img-box">
      
      <div className="img-backdrop img-backdrop--main"></div>
      <div className="hero-img  hero-img__home">
        <img src={heroImage} alt={heroImage} />
      </div>
      <div className="article article_box-1">
        <div className="article_vector1">
          <img src={vector1} alt="vector1" />
        </div>
        <span>Solfware development</span>

        <div className="article_vector2">
           <img src={vector2} alt="" />
        </div>
      </div>

      <div className="article article_box-2">
        <div className="article_vector1">
          <img src={vector3} alt="vector1" />
        </div>
        <span>Data analytics</span>

        <div className="article_vector2">
           <img src={vector2} alt="" />
        </div>
      </div>
      

  </div>
  )
}

export default Hero
