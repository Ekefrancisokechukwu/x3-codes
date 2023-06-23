import React from 'react'
import instagram from '../../img/SVG/Instagram.svg';
import twitter from '../../img/SVG/Twitter.svg';
import founder from '../../img/founder.png';

const Founder = () => {
  return (
    <section className='section-founder'>
      <div className="founder">
      <div className="founder__info">
        <h1 className="heading-primary">About the  <span>Founder</span></h1>

        <p>
          Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis fa
          ucibus sed eget velit malesuada Lorem ipsum dolor sit amet consectetur. 
        </p>

        <div className="founder__name">
          <h3>kester nnamani</h3>
        </div>

        <div className="founder__social">
          <a href="">
           <img src={twitter} alt="twitter icon" />
          </a>

          <a href="">
           <img src={instagram} alt="intagram icon" />
          </a>
        </div>
      </div>

      <div className="founder__profile">
        <img src={founder} alt="founder img" />
      </div>
      </div>


    </section>
  )
}

export default Founder
